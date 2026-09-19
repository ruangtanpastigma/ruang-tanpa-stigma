(function () {
  const button = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  if (!button || !nav) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  }

  button.addEventListener('click', function () {
    const open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
})();
