import './Header.css'

export default function Header(){
  return (
    <header className="header">
      <h1 className="header__title">&lt;Justin &#47;&gt;</h1>
      <nav className="nav">
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