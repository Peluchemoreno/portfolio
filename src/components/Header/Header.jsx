import './Header.css'
import mobileMenu from '../../assets/menu-icon.svg'
import closeIcon from '../../assets/close-icon.svg'
import { useState } from 'react'

export default function Header(){
  const [mobileActive, setMobileActive] = useState(false)
  function toggleMobileMenu(){
    setMobileActive(!mobileActive)
  }
  return (
    <header className="header">
      
      <h1 className="header__title">&lt;Justin &#47;&gt;</h1>
      <img src={mobileMenu} alt="mobile menu button" onClick={toggleMobileMenu} className="header__mobile-menu-icon" />
      <nav className={mobileActive ? 'nav_visible' : 'nav'}>
        <span onClick={toggleMobileMenu} className="nav__close-btn"><img onClick={toggleMobileMenu} className='nav__close-btn-image' src={closeIcon} alt="close icon" /></span>
        <ul className="nav__links">
          <li className="nav__link"><a href="#home" className="nav__link-text">Home</a></li>
          <li className="nav__link"><a href="#about" className="nav__link-text">About</a></li>
          <li className="nav__link"><a href="#projects" className="nav__link-text">Projects</a></li>
          <li className="nav__link"><a href="#contact" className="nav__link-text">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}