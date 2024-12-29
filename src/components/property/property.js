import Menu from "../menu bar/menu";
import Property_head from "./property_head/pp_head";
import Latest_Property from "./latest_pp/latest_prop";
import Footer from "../footer/footer";
import FAQ from "../faq/faq";
import Agent_comment from "../agents/agent_comment/agent_comment";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./find_property/SearchBar";
import { properties } from "./latest_pp/latest_prop";  // Import the properties array

function Property() {
  return (
    <div>
      <Menu />
      <Property_head />
      <SearchBar />
      <h1 style={{ marginLeft: "170px", marginTop: "100px" }}>Latest Properties</h1>
      {/* Pass properties as a prop to Latest_Property */}
      <Latest_Property propertiesData={properties} />
      <Pagination totalPages={5} />
      <Agent_comment />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Property;
