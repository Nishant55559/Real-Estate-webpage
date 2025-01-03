import './agents_body.css';
import pc14 from './pc14.jpg';
import pc24 from './pc24.jpg';
import pc34 from './pc34.jpg';
import pc44 from './pc44.jpg';
import pc54 from './pc54.jpg';
import pc64 from './pc64.jpg';
import pc74 from './pc74.jpg';
import pc84 from './pc84.jpg';
import pc94 from './pc94.jpg';
import pc104 from './pc104.jpg';
import pc114 from './pc114.jpg';
import pc124 from './pc124.jpg';

// Your agents data (no need to modify this if it is already correct)
export const agents = [
  { name: "James Stallon", img: pc14 },
  { name: "Emily Brown", img: pc24 },
  { name: "Michael Scott", img: pc34 },
  { name: "Sarah Johnson", img: pc44 },
  { name: "John Doe", img: pc54 },
  { name: "Anna Lee", img: pc64 },
  { name: "Robert Smith", img: pc74 },
  { name: "Linda White", img: pc84 },
  { name: "Chris Adams", img: pc94 },
  { name: "Sophia Clark", img: pc104 },
  { name: "Daniel Moore", img: pc114 },
  { name: "Olivia Davis", img: pc124 }
];

function Agents_body({ agentsData }) {
  // Ensure agentsData is passed correctly and is an array
  if (!Array.isArray(agentsData) || agentsData.length === 0) {
    return <p>No agents available.</p>;
  }

  return (
    <div className="agents-container">
      {agentsData.map((agent, index) => (
        <div className="agent-card" key={index}>
          <div className="agent-image-container">
            <img src={agent.img} alt={agent.name} className="agent-image" />
          </div>
          <div className="agent-info">
            <h3>{agent.name}</h3>
            <p>Listing — 10 Properties</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Agents_body;
