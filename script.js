function toggleTheme() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const icon = btn.querySelector('.toggle-icon');
  const label = btn.querySelector('.toggle-label');

  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    icon.textContent = '☾';
    label.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    icon.textContent = '☀';
    label.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  }
}

// Remember preference on reload
function initializeTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    const btn = document.querySelector('.theme-toggle');
    const icon = btn.querySelector('.toggle-icon');
    const label = btn.querySelector('.toggle-label');
    icon.textContent = '☾';
    label.textContent = 'Dark';
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);
