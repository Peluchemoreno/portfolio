import './Contact.css'

export default function Contact(){
  return (
    <section className="contact">
      <h2 className="contact__header">Contact Me</h2>
      <div className="contact__contents">
        <a href="mailto:jmcdmoreno19@aol.com"><button className="contact__button contact__button_email">Email Me</button></a>
        <a href="https://drive.google.com/file/d/1ytytqSTtx5SL2pSOf_WG2-lBH-zYQpst/view?usp=sharing"  download="JustinMcDonaldCV.pdf"><button className="contact__button contact__button_cv">Download CV</button></a>
      </div>
    </section>
  )
}