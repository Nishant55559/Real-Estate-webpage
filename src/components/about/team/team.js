import './team.css';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import adam from './adam.jpeg'
import Megamind from './𝗠𝗲𝗴𝗮𝗺𝗶𝗻𝗱.jpeg'
import pussy from './pussy.jpeg'
import gru from './gru.jpeg'

    function TeamSection(){
  return (
        <div className="team-section">
          <h2 className="section-title">Expert Team Behind CASA MIA</h2>
          <p className="section-description" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nibh eu ullamcorper luctus, lacus ex consequat ipsum, ultricies interdum ex ante.
          </p>
          <div className="team-cards">
            <div className="team-card">
              <img src={adam} alt="Rajbir" className="team-image" />
              <h3 className="team-name">Rajbir</h3>
              <p className="team-role">CASA MIA Team</p>
              <div className="social-icons">
                <a href="#" className="icon"><FaLinkedin size={24} /></a>
                <a href="#" className="icon"><FaInstagram size={24} /></a>
                <a href="#" className="icon"><FaTwitter size={24} /></a>
              </div>
            </div>
            <div className="team-card">
              <img src={pussy} alt="gary" className="team-image" />
              <h3 className="team-name">Gary</h3>
              <p className="team-role">CASA MIA Team</p>
              <div className="social-icons">
                <a href="#" className="icon"><FaLinkedin size={24} /></a>
                <a href="#" className="icon"><FaInstagram size={24} /></a>
                <a href="#" className="icon"><FaTwitter size={24} /></a>
              </div>
            </div>
            <div className="team-card">
              <img src={Megamind} alt="nishant" className="team-image" />
              <h3 className="team-name">Nishant</h3>
              <p className="team-role">CASA MIA Team</p>
              <div className="social-icons">
                <a href="#" className="icon"><FaLinkedin size={24} /></a>
                <a href="#" className="icon"><FaInstagram size={24} /></a>
                <a href="#" className="icon"><FaTwitter size={24} /></a>
              </div>
            </div>
            <div className="team-card">
              <img src={gru} alt="apoorv" className="team-image" />
              <h3 className="team-name">Apoorv</h3>
              <p className="team-role">CASA MIA Team</p>
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