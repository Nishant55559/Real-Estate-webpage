import Menu from "../menu bar/menu";
import Home_body from "./home_body/home_body";
import FAQ from "../faq/faq";
import Footer from "../footer/footer";
import WorkFlow from "./work_flow/work_flow";
import People from "./People/people";
import Rating from "../about/rating/rating";

function Home(){
    return(
        <div>
            <Menu/>
            <Home_body/>
            <div style={{height:"120px"}}></div>
            <WorkFlow/>
            <div style={{height:"120px"}}>
            </div>
            <People/>
            <Rating/>
            <div style={{height:"120px"}}>
            </div>

            <FAQ/>
            <Footer/>
        </div>
    )
};

export default Home;