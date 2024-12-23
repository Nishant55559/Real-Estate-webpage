import './agents_body.css';
import pc14 from './pc14.jpeg'
import pc24 from './pc24.jpeg'
import pc34 from './pc34.jpeg'
import pc44 from './pc44.jpeg'
import pc54 from './pc54.jpeg'
import pc64 from './pc64.jpeg'
import pc74 from './pc74.jpeg'
import pc84 from './pc84.jpeg'
import pc94 from './pc94.jpeg'
import pc104 from './pc104.jpeg'
import pc114 from './pc114.jpeg'
import pc124 from './pc124.jpeg'

const agents = [
    { name: "James Stallon", img: pc14 },
    { name: "Emily Brown", img: pc24 },
    { name: "Michael Scott", img: pc34 },
    { name: "Sarah Johnson", img: pc44 },
    { name: "John Doe", img: pc54},
    { name: "Anna Lee", img: pc64 },
    { name: "Robert Smith", img: pc74},
    { name: "Linda White", img: pc84 },
    { name: "Chris Adams", img: pc94},
    { name: "Sophia Clark", img: pc104},
    { name: "Daniel Moore", img: pc114 },
    { name: "Olivia Davis", img: pc124 }
    
  ];
  
function Agents_body(){
    return (
        <div className="agents-container">
          
          {agents.map((agent, index) => (
            <div className="agent-card" key={index}>
              <div className="agent-image-container">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="agent-image"
                />
              </div>
              <div className="agent-info">
                <h3>{agent.name}</h3>
                <p>Listing — 10 Properties</p>
              </div>
            </div>
          ))}
       
        </div>
      )
};

export default Agents_body;