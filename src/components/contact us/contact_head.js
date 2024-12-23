import './contact_head.css';
import contact from './contact.jpg'

function Contact_head() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Get in touch</h1>
        <nav className="breadcrumb">
          <a href="/">Home</a> <span>&gt;</span> <span> Contact</span>
        </nav>
      </div>
    </div>
  );
}

export default Contact_head;
