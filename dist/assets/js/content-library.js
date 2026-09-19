(function () {
  const root = document.querySelector('[data-content-library]');
  if (!root) return;

  const lang = root.dataset.language || 'id';
  const source = root.dataset.contentSrc;
  const readBase = root.dataset.readBase || 'baca/';
  const search = document.querySelector('[data-content-search]');
  const category = document.querySelector('[data-content-category]');
  const type = document.querySelector('[data-content-type]');
  const count = document.querySelector('[data-content-count]');
  let posts = [];

  const text = lang === 'id' ? {
    article: 'Artikel', video: 'Video', read: 'Baca selengkapnya', watch: 'Tonton video',
    empty: 'Belum ada konten yang sesuai dengan pencarian ini.', one: 'konten ditemukan', many: 'konten ditemukan', error: 'Konten belum dapat dimuat.'
  } : {
    article: 'Article', video: 'Video', read: 'Read more', watch: 'Watch video',
    empty: 'No content matches this search yet.', one: 'item found', many: 'items found', error: 'Content could not be loaded.'
  };

  const categoryLabels = lang === 'id' ? {
    'stigma-komunikasi': 'Stigma & komunikasi', evidence: 'Evidence', 'hiv-dasar': 'HIV dasar',
    'tes-pencegahan': 'Tes & pencegahan', 'pengobatan-uu': 'Pengobatan & U=U', dukungan: 'Dukungan'
  } : {
    'stigma-komunikasi': 'Stigma & communication', evidence: 'Evidence', 'hiv-dasar': 'HIV basics',
    'tes-pencegahan': 'Testing & prevention', 'pengobatan-uu': 'Treatment & U=U', dukungan: 'Support'
  };

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, function (character) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[character];
    });
  }

  function formatDate(value) {
    if (!value) return '';
    const date = new Date(value + 'T00:00:00');
    return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', {day:'numeric', month:'long', year:'numeric'}).format(date);
  }

  function renderCard(post) {
    const isVideo = post.type === 'video';
    const href = readBase + '?slug=' + encodeURIComponent(post.slug);
    return '<article class="content-card">' +
      '<div class="content-kicker' + (isVideo ? ' video' : '') + '"><span class="content-symbol" aria-hidden="true">' + (isVideo ? '▶' : '¶') + '</span></div>' +
      '<div class="content-card-body">' +
      '<div class="content-meta"><span class="chip">' + escapeHtml(isVideo ? text.video : text.article) + '</span><span>' + escapeHtml(categoryLabels[post.category] || post.category) + '</span></div>' +
      '<h2>' + escapeHtml(post.title) + '</h2>' +
      '<p>' + escapeHtml(post.summary) + '</p>' +
      '<div class="content-meta"><span>' + escapeHtml(post.author) + '</span><span>' + escapeHtml(formatDate(post.published_at)) + '</span></div>' +
      '<a class="card-link" href="' + href + '">' + escapeHtml(isVideo ? text.watch : text.read) + '</a>' +
      '</div></article>';
  }

  function update() {
    const query = (search && search.value || '').trim().toLocaleLowerCase(lang === 'id' ? 'id' : 'en');
    const selectedCategory = category && category.value || 'all';
    const selectedType = type && type.value || 'all';
    const filtered = posts.filter(function (post) {
      const haystack = [post.title, post.summary, post.author, categoryLabels[post.category] || post.category].join(' ').toLocaleLowerCase(lang === 'id' ? 'id' : 'en');
      return (!query || haystack.includes(query)) && (selectedCategory === 'all' || post.category === selectedCategory) && (selectedType === 'all' || post.type === selectedType);
    });
    root.innerHTML = filtered.length ? filtered.map(renderCard).join('') : '<div class="empty-state"><p>' + escapeHtml(text.empty) + '</p></div>';
    if (count) count.textContent = filtered.length + ' ' + (filtered.length === 1 ? text.one : text.many);
  }

  fetch(source)
    .then(function (response) { if (!response.ok) throw new Error('Content request failed'); return response.json(); })
    .then(function (data) {
      posts = (data.posts || []).filter(function (post) { return post.lang === lang && post.status === 'published'; });
      update();
    })
    .catch(function () { root.innerHTML = '<div class="empty-state"><p>' + escapeHtml(text.error) + '</p></div>'; });

  [search, category, type].forEach(function (control) { if (control) control.addEventListener(control === search ? 'input' : 'change', update); });
})();
