export const themeScript = `
(function() {
  function setTheme() {
    const theme = localStorage.getItem('theme') || 'system';
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Simple class toggle with color-scheme
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
    }
  }

  function setColor(name, defaultValue) {
    const value = localStorage.getItem(name) || defaultValue;
    document.documentElement.setAttribute('data-' + name, value);
  }

  setTheme();
  setColor('primary-color', 'lime');
  setColor('gray-color', 'olive');
  setColor('secondary-color', 'mint');
  setColor('accent-color', 'lime');

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);
})();
`
