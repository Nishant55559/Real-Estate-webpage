
import './about_cm.css';
import about1 from './about1.jpeg'
import about2 from './about2.jpeg'

function About_cm(){
  return (
    <div className="container">
      <div className="about-section">
        <div className="about-text">
          <h2>About CASA MIA</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nibh eu ullamcorper luctus, lacus ex consequat ipsum, ultricies interdum ex ante sit amet tellus. Quisque faucibus iaculis quam a aliquet.
          </p>
          <ul className="features-list">
            <div>
              <li>Phasellus rutrum</li>
              <li>Donec at quam</li>
              <li>Phasellus tristique</li>
              <li>Quisque rhoncus</li>
            </div>
            <div>
              <li>Phasellus rutrum</li>
              <li>Donec at quam</li>
              <li>Phasellus tristique</li>
              <li>Quisque rhoncus</li>
            </div>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="image-slider">
          <div className="image-c">
            <img
              src={about1} 
              alt="Room 1"
              className="img"
            />
            <img
              src={about2} 
              alt="Room 2"
              className="img"
            />
          </div>
          <div className="slider-button">&#9654;</div>
        </div>
      </div>
    </div>
  );
}

export default About_cm;
