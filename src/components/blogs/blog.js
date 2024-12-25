import Menu from "../menu bar/menu";
import Blog_head from "./blog_head/blog_head";
import Blog_body from "./blog_body/blog_body";
import FAQ from "../faq/faq";
import Footer from "../footer/footer";
import Pagination from "../property/Pagination/Pagination";

function Blogs(){
    return(
        <div>
            <Menu/>
            <Blog_head/>
            <Blog_body/>
            <Pagination totalPages={5} />
            <div style={{height:"50px"}}></div>
            <FAQ/>
            <Footer/>
            
        </div>
    )
};

export default Blogs;