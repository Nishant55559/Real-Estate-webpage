import Menu from "../menu bar/menu";
import Agent_head from "./agent_head/agent_head";
import Agents_body, { agents } from "./agent-body/agents_body"; // Import the agents data
import Footer from "../footer/footer";
import Agent_comment from "./agent_comment/agent_comment";

function Agents() {
  return (
    <div>
      <Menu />

      <Agent_head />

      {/* Pass the agents data to the Agents_body component */}
      <Agents_body agentsData={agents} />

      <div style={{ height: "100px" }}></div>
      
      <div><h1 style={{textAlign: "center", paddingTop:"10px"}}>Recent Comments</h1></div>
     
      <Agent_comment />
      
      <Footer />

    </div>
  );
}

export default Agents;
