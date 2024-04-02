type Theme = 'light' | 'dark'

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'light'

  const preferredTheme = localStorage.getItem('theme');
  if (preferredTheme && (preferredTheme === 'light' || preferredTheme === 'dark')) {
    return preferredTheme as Theme;
  } else {
    return 'light';
  }
}

export {
  getPreferredTheme
}