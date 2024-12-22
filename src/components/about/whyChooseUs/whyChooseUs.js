
import './whyChooseUs.css';

function WhyChooseUs() {
  return (
    <div className="why-choose-us-container">
      <div className="content">
        <div className="grid-section">
          <div className="grid-item">
            <div className="icon">🏢</div>
            <h3>Reliable</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid-item highlighted">
            <div className="icon">☁️</div>
            <h3>Comfortable</h3>
            <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid-item">
            <div className="icon">👍</div>
            <h3>Guarantee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid-item">
            <div className="icon">🏷️</div>
            <h3>Affordable</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="text-section">
          <h2>Why Choose Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nibh eu ullamcorper luctus, lacus ex consequat ipsum, ultricies interdum ex ante sit amet tellus.
          </p>
          <button className="discover-button">Discover More</button>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
