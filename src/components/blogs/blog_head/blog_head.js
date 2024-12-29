import './blog_head.css';
import blog from './blog.jpg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function Blog_head(){

    return (
        <div className="header-container">
          <div className="header-content">
            <h1>Our Blogs</h1>
            <nav className="breadcrumb">
              <a href="/">Home</a> <span>&gt;</span> <span>Blogs</span>
            </nav>
          </div>
        </div>
      );
}

export default Blog_head;