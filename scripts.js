
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-walink').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.href;

      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});
