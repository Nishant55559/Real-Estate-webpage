
import './about_cm.css';
import about1 from './about1.jpeg'
import about2 from './about2.jpeg'

function About_cm(){
  return (
    <div className="about-mansion-container">
      <div className="about-mansion-content">
        <div className="about-text">
          <h2>About Mansion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac nisi vel libero cursus vulputate...
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>View More</button>
        </div>
        <div className="about-images">
          <img src={about1} alt="Room 1" />
          <img src={about2} alt="Room 2" />
        </div>
      </div>
    </div>
  );
}

export default About_cm;
