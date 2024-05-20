import './Footer.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export default function Footer(){
  return (
    <footer id='contact' className="footer">
      <h2 className="footer__text">&copy; Justin McDonald 2024</h2>
      <nav className="footer__nav">
        <ul className="footer__link-list">
          <li className='footer__link-item'>
            <a href="https://github.com/Peluchemoreno" target='_blank' className="footer__link">
              <img src={github} alt="github link" className="footer__link-image" />
            </a>
            <a href="https://www.linkedin.com/in/justin-mcdonald-9647ab234" target='_blank' className="footer__link">
             <img src={linkedin} alt="linkedin link" className="footer__link-image" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}