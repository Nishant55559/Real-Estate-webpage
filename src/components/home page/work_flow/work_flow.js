
import './work_flow.css';
import homy from './homy.jpg'

function WorkFlow() {
  return (
    <div className="workflow">
      <div className="workflow-container">
        <h2 className="workflow-title">How it works</h2>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="workflow-number">01</div>
            <h3>Evaluate Property</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="workflow-step">
            <div className="workflow-number">02</div>
            <h3>Meet Your Agent</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="workflow-step">
            <div className="workflow-number">03</div>
            <h3>Close the Deal</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="workflow-step">
            <div className="workflow-number">04</div>
            <h3>Have Your Property</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>
      </div>
      <div className="workflow-image">
        
        <img src={homy} alt="Living Room" />
      </div>
    </div>
  );
};

export default WorkFlow;
