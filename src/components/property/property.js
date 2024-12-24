import Property_head from "./property_head/pp_head";
import Menu from "../menu bar/menu";
import Latest_Property from "./latest_pp/latest_prop";
import Footer from "../footer/footer";
import FAQ from "../faq/faq";

function Property(){
    return(
        <div>
            <Menu/>
            <Property_head/>
            <Latest_Property/>
            <FAQ/>
            <Footer/>

        </div>
    )
};

export default Property;

