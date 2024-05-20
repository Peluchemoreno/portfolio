import "./Hero.css"
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export default function Hero(){
  return (
    <section className="hero">
      <h1 className="hero__title">
        Hi! My name is Justin McDonald, and I like to build things for the web.
      </h1>
      <div className="hero__button-container_outer">
        <div className="hero__button-container">
          <a href="#about" className="hero__button-link">
            <button className="hero__more-button">Learn More <span className="hero__more-button-span">&#8964;</span></button>
          </a>
        </div>
      </div>
      <ul className="hero__social-links">
        <li className="hero__social-list-item"><a href="https://github.com/Peluchemoreno" target="_blank" className="hero__link"><img src={github} alt="github link" className="hero__social-link-image" /></a></li>
        <li className="hero__social-list-item"><a href="https://www.linkedin.com/in/justin-mcdonald-9647ab234" target="_blank" className="hero__link"><img src={linkedin} alt="linkedin link" className="hero__social-link-image" /></a></li>
      </ul>
    </section>
  )
}