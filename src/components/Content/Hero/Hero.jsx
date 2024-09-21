import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../../../ThemeContext';

export default function Hero() {
  const { isDarkMode } = useContext(ThemeContext);

  return <section id="hero">
    <div className='hero-container'>
      <div className='row' style={{ height: "390px" }}>
        <div className='column'>
          <span className={`subtitle ${isDarkMode? 'dark' : 'light'}`}>Hi, my name is</span>
          <h2 className={isDarkMode? 'dark' : 'light'}>Isabella.</h2>
          <h3 className={isDarkMode? 'dark' : 'light'}>I build things for the web</h3>
          <p className={`hero-content ${isDarkMode? 'dark' : 'light'}`}>
            A passionate web app developer. I tend to make use of modern web technologies to build
            websites that look great, feel fantastic, and function correctly.
          </p>
          <div className='row' style={{ height: '98px' }}>
            <div className='left-content'>
              <a href='#' className={`btn ${isDarkMode? 'dark' : 'light'}`} download>
                Resume
              </a>
            </div>
            <div className='right-content'>
              <span>
                <span className='px-1'>
                  <a href="https://example.com" target="_blank" className={`btn social-icon ${isDarkMode? 'dark' : 'light'}`}>
                    <FontAwesomeIcon icon={faGithub}  className='fa-icons'/>
                  </a>
                </span>
                <span className='px-1'>
                  <a href="https://example.com" target="_blank" className={`btn social-icon ${isDarkMode? 'dark' : 'light'}`}>
                    <FontAwesomeIcon icon={faXTwitter} className='fa-icons' />
                  </a>
                </span>
                <span className='px-1'>
                  <a href="https://example.com" target="_blank" className={`btn social-icon ${isDarkMode? 'dark' : 'light'}`}>
                    <img src='/icons/fav.png' style={{height: "16px"}} />
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className='outer-container' style={{width: '416px'}}>
          <div className='row middle-container' style={{height: '360px'}}>
            <div className='inner-container'>
              <img src='/icons/hero.svg' className='img-thumbnail' />
            </div>
          </div>
        </div>
      </div>
      <div className='hero-bottom'>
        <img src='/icons/boxes.svg' />
      </div>
    </div>
  </section>
}