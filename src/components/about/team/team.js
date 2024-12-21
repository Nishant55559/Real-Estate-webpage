import './team.css';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

    function TeamSection(){
  return (
        <div className="team-section">
          <h2 className="section-title">Expert Team Behind CASA MIA</h2>
          <p className="section-description" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nibh eu ullamcorper luctus, lacus ex consequat ipsum, ultricies interdum ex ante.
          </p>
          <div className="team-cards">
            <div className="team-card">
              <img src="/path/to/image1.jpg" alt="Sarah Jhon" className="team-image" />
              <h3 className="team-name">Sarah Jhon</h3>
              <p className="team-role">Mansion Team</p>
              <div className="social-icons">
                <a href="#" className="icon"><FaLinkedin size={24} /></a>
                <a href="#" className="icon"><FaInstagram size={24} /></a>
                <a href="#" className="icon"><FaTwitter size={24} /></a>
              </div>
            </div>
            <div className="team-card">
              <img src="/path/to/image2.jpg" alt="Mike Morales" className="team-image" />
              <h3 className="team-name">Mike Morales</h3>
              <p className="team-role">Mansion Team</p>
              <div className="social-icons">
                <a href="#" className="icon"><FaLinkedin size={24} /></a>
                <a href="#" className="icon"><FaInstagram size={24} /></a>
                <a href="#" className="icon"><FaTwitter size={24} /></a>
              </div>
            </div>
            <div className="team-card">
              <img src="/path/to/image3.jpg" alt="Steve Irwin" className="team-image" />
              <h3 className="team-name">Steve Irwin</h3>
              <p className="team-role">Mansion Team</p>
              <div className="social-icons">
                <a href="#" className="icon"><FaLinkedin size={24} /></a>
                <a href="#" className="icon"><FaInstagram size={24} /></a>
                <a href="#" className="icon"><FaTwitter size={24} /></a>
              </div>
            </div>
            <div className="team-card">
              <img src="/path/to/image4.jpg" alt="Manda Jean" className="team-image" />
              <h3 className="team-name">Manda Jean</h3>
              <p className="team-role">Mansion Team</p>
              <div className="social-icons">
                <a href="#" className="icon"><FaLinkedin size={24} /></a>
                <a href="#" className="icon"><FaInstagram size={24} /></a>
                <a href="#" className="icon"><FaTwitter size={24} /></a>
              </div>
            </div>
          </div>
        </div>
  )
};

export default TeamSection;