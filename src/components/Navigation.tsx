import { Link } from 'react-router';
import { styles } from '../constants/styles';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../constants/index';
import { useState } from 'react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${theme.nav.container} ${theme.background}`}>
      <div className={`${styles.flexRow} ${styles.padding}  ${theme.background}`}>
        {/* Desktop Navigation */}
        <ul className={` ${theme.nav.links}`}>
          {navLinks.map(({ id, title, path }) => (
            <li key={id}>
              <Link className={`${theme.text} ${theme.nav.link.primary}`} to={path as string}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`${theme.text} ${theme.nav.button} `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <button
          onClick={toggleTheme}
          className={theme.button.primary}
        >
          Theme
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`${theme.background} ${theme.nav.dropdown}`}>
          <ul className={theme.nav.mobileLinks}>
            {navLinks.map(({ id, title, path }) => (
              <li key={id}>
                <Link 
                  className={`${theme.text} ${theme.nav.link.primary}`} 
                  to={path as string}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

