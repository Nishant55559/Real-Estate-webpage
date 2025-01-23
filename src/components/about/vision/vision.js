
import './vision.css';
import vision from './vision.jpg'

function VisionMission() {
  return (
    <div className="vision-mission-container">
      <h2 className="section-title">Vision & Mission</h2>
      <div className="content">
        <div className="image-container">
          <img src={vision} alt="Vision and Mission" />
        </div>
        <div className="text-section">
          <div className="text-block">
            <h3>Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nibh eu ullamcorper luctus,  tellus.
            </p>
            <ul>
              <li>Phasellus rutrum</li>
              <li>Donec at quam</li>
              <li>Phasellus tristique</li>
              <li>Quisque rhoncus</li>
            </ul>
          </div>
          <div className="text-block">
            <h3>Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nibh eu ullamcorper .
            </p>
            <ul>
              <li>Phasellus rutrum</li>
              <li>Donec at quam</li>
              <li>Phasellus tristique</li>
              <li>Quisque rhoncus</li>
            </ul>
          </div>
        </div>
      </div>
      <button className="discover-button">Discover More</button>
    </div>
  );
}

export default VisionMission;


