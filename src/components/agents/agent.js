import Menu from "../menu bar/menu";
import Agent_head from "./agent_head/agent_head";
import Agents_body from "./agent-body/agents_body";
import Footer from "../footer/footer";
import Agent_comment from "./agent_comment/agent_comment";

function Agents(){
    return(
        <div>
                <Menu/>
                <Agent_head/>
                <Agents_body/>
                <Agent_comment/>
                <Footer/>
        </div>
    )
};
export default Agents;