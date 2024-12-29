import Menu from "../../menu bar/menu";
import Blog_pagehead from "./blog_page_head/blog_ph";
import Blog_pagebody from "./blog_page_body/blog_pb";
import Blog_reply from "./blog_reply/blog_reply";
import Blog_box from "./reply_box/blog_box";
import Footer from "../../footer/footer";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function Blog_page(){
    return(
        <div>
            <Menu/>
            <Blog_pagehead/>
            <Blog_pagebody/>
            <Blog_reply/>
            <Blog_box/>
            <Footer/>
        </div>
    )
};

export default Blog_page;