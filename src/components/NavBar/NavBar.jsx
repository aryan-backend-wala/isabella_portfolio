import { useState } from 'react';
import './NavBar.css'

export default function NavBar(){
  const [toggle, setToggle] = useState(false);
  const linkList = ['About Me', 'Experience', 'Education', 'Projects', 'Achievements', 'Contact', 'Blog', 'Gallery']
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-container'>
        <a className="navbar-brand" href="/" style={{ display: 'inline-block' }}>
          <img src="/icons/fav.png" style={{ width: '30px', height: '30px', verticalAlign: 'middle' }} />
          <span style={{ verticalAlign: 'middle' }}> Hugo Profile</span>
        </a>
          <input 
            id="search"
            placeholder='Ctrl + k to Search...'
          />
          <div id='navbar-content'>
            <ul className='navbar-nav'>
              {
                linkList.map(link => (
                  <li key={link} className='navbar-item'>
                    <a className='navbar-link'>{link}</a>
                  </li>
                ))
              }
              <li className='navbar-item'>
                <button id='theme-toggle' onClick={() => setToggle(!toggle)} >
                  <img src={`/icons/${toggle ? 'moon' : 'sun'}.svg`} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}