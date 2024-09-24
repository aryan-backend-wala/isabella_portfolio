import { useContext } from 'react'
import './Experience.css'
import { ThemeContext } from '../../../ThemeContext';

export default function Experience(){
  const {isDarkMode} = useContext(ThemeContext)
  const listItems = ['facebook', 'amazon', 'apple', 'netflix', 'google']
  return <section id="experience" style={{height: '520px', padding: '48px 0'}}>
    <div style={{ margin: '0 104px', padding: "0 12px", height: '100%'}}>
      <h3>Experience</h3>
      <div className='exp-row'>
        <div className='exp-container'>
          <div className='exp-inner-box'>
            <ul>
              {
                listItems.map(item => (
                  <li key={item}>{item}</li>
                ))
              }
            </ul>
            <div className='tab-content'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}