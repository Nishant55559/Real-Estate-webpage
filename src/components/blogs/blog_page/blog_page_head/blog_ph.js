import './blog_ph.css';
import blog_page from './blog_page.jpg'

function Blog_pagehead(){

    return (
        <div className="header-container">
          <div className="header-content">
            <h1>Our Blogs</h1>
            <nav className="breadcrumb">
              <a href="/">Home</a> <span>&gt;</span> <span>Blogs</span><span>&gt;</span><span>Blog Page</span>
            </nav>
          </div>
        </div>
      );
}

export default Blog_pagehead;