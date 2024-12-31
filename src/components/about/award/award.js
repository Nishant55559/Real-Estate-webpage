import './award.css';
import award1 from './award1.jpg'
import award2 from './award2.jpg'
import award3 from './award3.jpg'
import award4 from './award4.jpg'
import Footer from '../../footer/footer';

function AwardsSection(){
  return (
    <div className="awards-section">
      <div className="awards-content">
        <h2 className="section-title">We Are The Awards Winning</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut tortor
          id diam commodo pellentesque at et felis. Proin mollis sodales condimentum. Phasellus semper feugiat blandit.
        </p>
        <p className="section-description">
          Etiam aliquam, mauris quis feugiat egestas, orci turpis lacinia eros, et venenatis ante nisl quis nulla.
        </p>
        <button className="see-more-button">See More</button>
      </div>
      <div className="awards-grid">
        <div className="award-card">
          <img src={award1} alt="Construction Awards" className="award-image" />
          <div className="award-details">
            <h3 className="award-number">35</h3>
            <p className="award-category">Construction Awards</p>
          </div>
        </div>
        <div className="award-card">
          <img src={award2} alt="Home Design Awards" className="award-image" />
          <div className="award-details">
            <h3 className="award-number">20</h3>
            <p className="award-category">Home Design Awards</p>
          </div>
        </div>
        <div className="award-card">
          <img src={award3} alt="Interior Awards" className="award-image" />
          <div className="award-details">
            <h3 className="award-number">52</h3>
            <p className="award-category">Interior Awards</p>
          </div>
        </div>
        <div className="award-card">
          <img src={award4} alt="Architecture Awards" className="award-image" />
          <div className="award-details">
            <h3 className="award-number">67</h3>
            <p className="award-category">Architecture Awards</p>
          </div>
        </div>
      </div>
    </div>

  )
};

export default AwardsSection;