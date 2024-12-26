import Menu from "../../menu bar/menu";
import Blog_pagehead from "./blog_page_head/blog_ph";
import Blog_pagebody from "./blog_page_body/blog_pb";
import Blog_reply from "./blog_reply/blog_reply";

function Blog_page(){
    return(
        <div>
            <Menu/>
            <Blog_pagehead/>
            <Blog_pagebody/>
            <Blog_reply/>
        </div>
    )
};

export default Blog_page;