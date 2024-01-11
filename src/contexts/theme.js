import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const localTheme = localStorage.getItem('themeName')

  const [themeName, setThemeName] = useState(localTheme || 'dark');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
     const systemTheme = darkMediaQuery.matches ? 'dark' : 'light';

    setThemeName(localTheme || systemTheme);
    
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'light' : 'dark')
    });
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'; 
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
