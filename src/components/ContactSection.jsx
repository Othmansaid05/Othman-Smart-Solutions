import './ContactSection.css';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ljzzbb', 'template_m2jjgwm', e.target, 'ew0XoEj8lNzhr8i8s')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">We’d love to hear from you! Fill out the form below, and we’ll get back to you soon.</p>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" className="contact-input" style={{ width: '100%' }} required />
        <input type="email" name="user_email" placeholder="Your Email" className="contact-input" style={{ width: '100%' }} required />
        <textarea name="message" placeholder="Your Message" className="contact-textarea" style={{ width: '100%' }} rows="5" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
