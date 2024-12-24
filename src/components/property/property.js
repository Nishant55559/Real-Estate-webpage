import Property_head from "./property_head/pp_head";
import Menu from "../menu bar/menu";
import Latest_Property from "./latest_pp/latest_prop";
import Footer from "../footer/footer";
import FAQ from "../faq/faq";
import Agent_comment from "../agents/agent_comment/agent_comment";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./find_property/SearchBar";

function Property(){
    return(
        <div>
            <Menu/>
            <Property_head/>
            <SearchBar/>
            <h1 style={{marginLeft:"170px",marginTop:"100px"}}>Latest Properties</h1>
            <Latest_Property/>
            <Pagination totalPages={5}/>
            <Agent_comment/>
            <FAQ/>
            <Footer/>

        </div>
    )
};

export default Property;

