import './Profile.css'
import picOfMe from '../../assets/Picofme.jpeg'

export default function Profile(){
  return (
    <section id="about" className="about__profile-section">
      <div className="about__header">
        <h2 className="about__title">About Me</h2>
        <p className="about__subtitle">Let me introduce myself.</p>
      </div>
      <div className="about__profile">
        <img src={picOfMe} alt="a picture of justin mcdonald" className="about__picture" />
        <div src={picOfMe} className="about__picture about__picture_offset"></div>
        <p className="about__description">I am an aspiring Full Stack Engineer who is diligent and tenacious, continually seeking to fill any knowledge gaps in pursuit of my goals. I am self-motivated, bilingual, and a people person who collaborates effectively in a team and works well independently.</p>
        
      </div>
        <a className='about__download-cv' href="https://drive.google.com/file/d/1ytytqSTtx5SL2pSOf_WG2-lBH-zYQpst/view?usp=sharing" target='_blank'>
          <button className="contact__button contact__button_cv">Download CV</button>
        </a>
    </section>
  )
}