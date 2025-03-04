import { Link } from 'react-router';
import { styles } from '../constants/styles';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../constants/index';
import { useState } from 'react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.nav.container} ${theme.background}`}>
      <div className={`${styles.flexRow} ${styles.padding}  ${theme.background}`}>
        {/* Desktop Navigation */}
        <ul className={`hidden sm:flex ${styles.nav.links}`}>
          {navLinks.map(({ id, title, path }) => (
            <li key={id}>
              <Link className={`${theme.text} ${styles.nav.link.primary}`} to={path as string}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden text-2xl"
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
        <div className={`sm:hidden ${theme.background} absolute left-0 right-0 p-4 z-10`}>
          <ul className={`${styles.flexCol} `}>
            {navLinks.map(({ id, title, path }) => (
              <li key={id}>
                <Link 
                  className={`${theme.text} ${styles.nav.link.primary}`} 
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

