import './Contact.css'

export default function Contact(){
  return (
    <section className="contact">
      <h2 className="contact__header">Contact Me</h2>
      <div className="contact__contents">
        <form method='post' action="phpmailer.php" className="contact__form">
          <label className='contact__form-label' htmlFor="name">
            Name
            <input className='contact__form-input' type="text" id='name' name='name' required/>
          </label>
          <label className='contact__form-label' htmlFor="email">
            Email
            <input className='contact__form-input' type="email" id='email' name='email' required/>
          </label>
          <label htmlFor="subject" className="contact__form-label">
            Subject
            <input type="text" id='subject' name='subject' className="contact__form-input" required/>
          </label>
          <label className='contact__form-label' htmlFor="body">
            Message
            <textarea className='contact__form-input contact__form-input_body' name="body" id="body" required></textarea>
          </label>
          <div className="contact__form-buttons">

          <a>
          <button type='submit' className="contact__button contact__button_email">Email Me</button>
        </a>
          </div>
        </form>
        
      </div>
    </section>
  )
}