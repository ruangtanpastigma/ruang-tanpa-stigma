(function () {
  const root = document.querySelector('[data-article-reader]');
  if (!root) return;

  const lang = root.dataset.language || 'id';
  const source = root.dataset.contentSrc;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const labels = lang === 'id' ? {
    missing: 'Artikel tidak ditemukan.', back: 'Kembali ke Artikel & Video', article: 'Artikel', video: 'Video',
    published: 'Dipublikasikan', reviewed: 'Terakhir ditinjau', reviewer: 'Peninjauan', sources: 'Sumber', share: 'Bagikan', copy: 'Salin tautan', copied: 'Tautan disalin.', failed: 'Tautan belum dapat disalin.'
  } : {
    missing: 'Content not found.', back: 'Back to Articles & Video', article: 'Article', video: 'Video',
    published: 'Published', reviewed: 'Last reviewed', reviewer: 'Review', sources: 'Sources', share: 'Share', copy: 'Copy link', copied: 'Link copied.', failed: 'The link could not be copied.'
  };

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, function (character) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[character]; });
  }

  function inline(text) {
    return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  function markdown(value) {
    const lines = String(value || '').split(/\r?\n/);
    let html = '', paragraph = [], listOpen = false;
    function flushParagraph() { if (paragraph.length) { html += '<p>' + inline(paragraph.join(' ')) + '</p>'; paragraph = []; } }
    function closeList() { if (listOpen) { html += '</ul>'; listOpen = false; } }
    lines.forEach(function (line) {
      if (!line.trim()) { flushParagraph(); closeList(); return; }
      if (line.startsWith('### ')) { flushParagraph(); closeList(); html += '<h3>' + inline(line.slice(4)) + '</h3>'; return; }
      if (line.startsWith('## ')) { flushParagraph(); closeList(); html += '<h2>' + inline(line.slice(3)) + '</h2>'; return; }
      if (line.startsWith('> ')) { flushParagraph(); closeList(); html += '<blockquote>' + inline(line.slice(2)) + '</blockquote>'; return; }
      if (line.startsWith('- ')) { flushParagraph(); if (!listOpen) { html += '<ul>'; listOpen = true; } html += '<li>' + inline(line.slice(2)) + '</li>'; return; }
      paragraph.push(line.trim());
    });
    flushParagraph(); closeList();
    return html;
  }

  function formatDate(value) {
    if (!value) return '';
    return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', {day:'numeric', month:'long', year:'numeric'}).format(new Date(value + 'T00:00:00'));
  }

  function youtubeEmbed(value) {
    if (!value) return '';
    try {
      const url = new URL(value);
      let id = '';
      if (url.hostname === 'youtu.be') id = url.pathname.slice(1);
      if (url.hostname.endsWith('youtube.com')) id = url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
      if (!/^[A-Za-z0-9_-]{6,20}$/.test(id || '')) return '';
      return 'https://www.youtube-nocookie.com/embed/' + id;
    } catch (error) { return ''; }
  }

  function sources(post) {
    if (!post.sources || !post.sources.length) return '';
    const items = post.sources.map(function (sourceItem) {
      try {
        const url = new URL(sourceItem.url);
        if (!['http:', 'https:'].includes(url.protocol)) return '';
        return '<li><a href="' + escapeHtml(url.href) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(sourceItem.label) + '</a></li>';
      } catch (error) { return ''; }
    }).join('');
    return items ? '<div class="sources"><h2>' + labels.sources + '</h2><ul>' + items + '</ul></div>' : '';
  }

  function render(post) {
    const embed = youtubeEmbed(post.video_url);
    document.title = post.title + ' | Ruang Tanpa Stigma';
    const typeLabel = post.type === 'video' ? labels.video : labels.article;
    root.innerHTML = '<header class="article-header"><div class="article-shell">' +
      '<p class="eyebrow">' + escapeHtml(typeLabel) + '</p><h1>' + escapeHtml(post.title) + '</h1><p class="article-deck">' + escapeHtml(post.summary) + '</p>' +
      '<div class="content-meta"><span>' + escapeHtml(post.author) + '</span><span>' + labels.published + ': ' + escapeHtml(formatDate(post.published_at)) + '</span></div>' +
      '<div class="article-actions"><button class="action-button" type="button" data-share>' + labels.share + '</button><button class="action-button" type="button" data-copy>' + labels.copy + '</button><span class="share-status" role="status" data-share-status></span></div>' +
      '</div></header><div class="article-body article-shell">' +
      (embed ? '<div class="video-frame"><iframe src="' + embed + '" title="' + escapeHtml(post.title) + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>' : '') +
      markdown(post.body) + sources(post) +
      '<div class="review-box"><strong>' + labels.reviewed + ':</strong> ' + escapeHtml(formatDate(post.reviewed_at) || '—') + '<br><strong>' + labels.reviewer + ':</strong> ' + escapeHtml(post.reviewer || '—') + '</div></div>';

    const status = root.querySelector('[data-share-status]');
    const shareButton = root.querySelector('[data-share]');
    const copyButton = root.querySelector('[data-copy]');
    if (!navigator.share) shareButton.hidden = true;
    shareButton.addEventListener('click', function () { navigator.share({title:post.title, text:post.summary, url:window.location.href}).catch(function () {}); });
    copyButton.addEventListener('click', function () {
      const fallback = function () {
        const area = document.createElement('textarea'); area.value = window.location.href; area.setAttribute('readonly', ''); area.style.position = 'fixed'; area.style.opacity = '0'; document.body.appendChild(area); area.select();
        const ok = document.execCommand('copy'); document.body.removeChild(area); status.textContent = ok ? labels.copied : labels.failed;
      };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(window.location.href).then(function () { status.textContent = labels.copied; }).catch(fallback); else fallback();
    });
  }

  function notFound() { root.innerHTML = '<section class="section"><div class="narrow empty-state"><h1>' + labels.missing + '</h1><p><a class="card-link" href="../">' + labels.back + '</a></p></div></section>'; }
  if (!slug) { notFound(); return; }
  fetch(source).then(function (response) { if (!response.ok) throw new Error('Content request failed'); return response.json(); }).then(function (data) {
    const post = (data.posts || []).find(function (item) { return item.slug === slug && item.lang === lang && item.status === 'published'; });
    if (!post) { notFound(); return; }
    render(post);
  }).catch(notFound);
})();
