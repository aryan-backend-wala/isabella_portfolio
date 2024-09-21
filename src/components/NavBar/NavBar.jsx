import { useContext } from 'react';
import './NavBar.css'
import { ThemeContext } from '../../ThemeContext';

export default function NavBar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const linkList = ['About Me', 'Experience', 'Education', 'Projects', 'Achievements', 'Contact', 'Blog', 'Gallery']
  return (
    <header id='profileHeader'>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a className={`navbar-brand ${isDarkMode ? 'dark' : 'light'}`} href="/" style={{ display: 'inline-block' }}>
            <img src="/icons/fav.png" style={{ width: '30px', height: '30px', verticalAlign: 'middle' }} />
            <span style={{ verticalAlign: 'middle' }}> Hugo Profile</span>
          </a>
          <input
            className={`search ${isDarkMode ? 'dark' : 'light'}`}
            placeholder='Ctrl + k to Search...'
          />
          <div id='navbar-content'>
            <ul className='navbar-nav'>
              {
                linkList.map(link => (
                  <li key={link} className={`navbar-item ${isDarkMode ? 'dark' : 'light'}`}>
                    <a className='navbar-link'>{link}</a>
                  </li>
                ))
              }
              <li className={`navbar-item ${isDarkMode ? 'dark' : 'light'}`}>
                <button id='theme-toggle' onClick={toggleTheme} >
                  {
                    isDarkMode ?
                      <svg id="sun"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="#e4e6eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg> :
                      <svg id="moon"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z">
                        </path>
                      </svg>
                  }
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}