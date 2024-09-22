import { useContext } from 'react';
import './About.css'
import { ThemeContext } from '../../../ThemeContext';

export default function About() {
  const { isDarkMode } = useContext(ThemeContext);
  const listItems = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express']
  return <section id="about-me">
    <div className='about-container'>
      <h3 style={{color: isDarkMode ? 'rgb(176, 179, 184)' : 'rgb(108, 117, 125)'}}>About Me</h3>
      <div className='about-row' style={{height: '405px'}}>
        <div className='about-image' style={{ padding: '0 12px' }}>
          <img src='/icons/me.png' style={{ height: '309px', padding: '0 48px' }} />
        </div>
        <div style={{ padding: '0 12px', color: isDarkMode ? 'rgb(228, 230, 235)' : 'rgb(52, 58, 64)'}} className='content'>
          <p>
            I am a software developer with a passion for web development. I have a background in computer science and mathematics, and I have a strong interest in the intersection of technology and art. I am currently working as a software developer at
            <a href='https://example.com' style={{color: isDarkMode ? 'rgb(228, 230, 235)' : '#007bff'}}>
              &nbsp;example org.&nbsp;
            </a>
            in San Francisco, CA.
          </p>
          <p>
            I am currently working on a project that will be used to help people find the best way to get around the city.
          </p>
          Here are a few technologies I've been working with recently:
          <ul>
            {
              listItems.map(skill => (
                <li className={isDarkMode ? 'dark' : 'light'}>{skill}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  </section>
}