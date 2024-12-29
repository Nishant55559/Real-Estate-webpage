import React from 'react';
import Menu from "../menu bar/menu";
import Blog_head from "./blog_head/blog_head";
import Blog_body, { blogs } from "./blog_body/blog_body";  // Import the blogs data
import FAQ from "../faq/faq";
import Footer from "../footer/footer";
import Pagination from "../property/Pagination/Pagination";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function Blogs() {
    return(
        <div>
            <Menu/>
            <Blog_head/>
            {/* Pass the blogs data as a prop to Blog_body */}
            <Blog_body blogsData={blogs} />
            <Pagination totalPages={5} />
            <div style={{height:"50px"}}></div>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default Blogs;
