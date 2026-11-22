const thread = document.getElementById('disqus_thread');
const button = document.querySelector('[data-comments-button]');
const status = document.querySelector('[data-comments-status]');

button.hidden = false;
button.addEventListener('click', () => {
  if (button.hasAttribute('aria-disabled')) return;

  button.setAttribute('aria-disabled', 'true');
  status.textContent = status.dataset.loading;

  window.disqus_config = function () {
    this.page.url = thread.dataset.pageUrl;
    this.page.identifier = thread.dataset.pageId;
    this.language = thread.dataset.pageLanguage;
  };

  const script = document.createElement('script');
  script.src = 'https://jmgaguilera.disqus.com/embed.js';
  script.dataset.timestamp = String(Date.now());
  script.addEventListener('load', () => {
    status.textContent = '';
    if (document.activeElement === button) thread.focus({ preventScroll: true });
    button.hidden = true;
  }, { once: true });
  script.addEventListener('error', () => {
    script.remove();
    button.removeAttribute('aria-disabled');
    status.textContent = status.dataset.error;
  }, { once: true });
  document.head.append(script);
});
