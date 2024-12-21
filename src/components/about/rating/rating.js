import './rating.css';

function Rating() {
  return (
    <div>
      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stat">
          <h3>25 K<span>+</span></h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3>560<span>+</span></h3>
          <p>Complete Projects</p>
        </div>
        <div className="stat">
          <h3>100 K<span>+</span></h3>
          <p>Property Sales</p>
        </div>
        <div className="stat">
          <h3>15<span>+</span></h3>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  );
}

export default Rating;
