
import "./contact.css";
import Back from './Back.jpg'


function ContactUs() {
  return (

    <div className="contact-us">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>
            Need an expert? You are more than welcome to leave your contact
            info, and we will be in touch shortly.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea
              placeholder="Comments / Questions"
              rows="4"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-card">
          <i className="icon">🏠</i>
          <h3>Visit Us</h3>
          <p>2 Elizabeth, London, UK</p>
        </div>
        <div className="info-card">
          <i className="icon">📞</i>
          <h3>Call Us</h3>
          <p>+44 (0) 208 115 7711</p>
        </div>
        <div className="info-card">
          <i className="icon">📧</i>
          <h3>Email Us</h3>
          <p>noreply@yourdomain.com</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31484.315381785236!2d-0.1236746!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603521e18d115%3A0x3b8c109801a64f72!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1630344115227!5m2!1sen!2suk"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer className="contact-footer">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
