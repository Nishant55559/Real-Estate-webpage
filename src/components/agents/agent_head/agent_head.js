import './agent_head.css';
import agent from './agent.jpg'

function Agent_head() {
  
    return (
        <div className="header-container">
          <div className="header-content">
            <h1>Our Blogs</h1>
            <nav className="breadcrumb">
              <a href="/">Home</a> <span>&gt;</span> <span>Agents</span>
            </nav>
          </div>
        </div>
      );
}

export default Agent_head;
