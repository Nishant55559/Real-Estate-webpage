import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./blog_pb.css";
import blogp1 from './blogp1.jpg'
import blogp2 from './blogp2.jpg'

function Blog_pagebody () {
  return (
    <div className="layout-wrapper">
      <aside className="sidebar-section">
        <div className="search-box">
          <input type="text" placeholder="Type a keyword and hit enter" />
        </div>
        <div className="categories-list">
          <h3>Categories</h3>
          <ul>
            <li>Jobs (12)</li>
            <li>Visual Assistant (22)</li>
            <li>Coffee (37)</li>
            <li>Drinks (42)</li>
            <li>Foods (14)</li>
            <li>Travel (140)</li>
          </ul>
        </div>
        <div className="recent-blogs">
          <h3>Recent Blog</h3>
          <ul>
            <li>Even the all-powerful Pointing has no control about the blind texts</li>
            <li>Even the all-powerful Pointing has no control about the blind texts</li>
            <li>Even the all-powerful Pointing has no control about the blind texts</li>
          </ul>
        </div>
        <div className="tag-area">
          <h3>Tag Cloud</h3>
          <div className="tag-items">
            <span>Dish</span>
            <span>Menu</span>
            <span>Food</span>
            <span>Sweet</span>
            <span>Tasty</span>
            <span>Delicious</span>
            <span>Desserts</span>
            <span>Drinks</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <article className="article-block">
          <Link to="/blog-page/1"> {/* Link to a specific blog page */}
            <h2>It is a long established fact a reader be distracted</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reiciendis, eius
              mollitia suscipit, quisquam doloremque distinctio...
            </p>
            <img
              src={blogp1}
              alt="Furniture example"
            />
          </Link>
          <p>
            Molestiae cupiditate inventore animi, maxime sapiente optio... Debitis
            commodi aut, adipisci.
          </p>
        </article>

        <article className="article-block">
          <Link to="/blog-page/2"> {/* Link to another specific blog page */}
            <h2>#2. Creative WordPress Themes</h2>
            <p>
              Temporibus ad error suscipit exercitationem hic molestias totam...
            </p>
            <img
              src={blogp2}
              alt="Chair example"
            />
          </Link>
          <p>
            Quisquam esse aliquam fuga distinctio, quidem delectus... Odit
            voluptatibus, eveniet vel nihil cum ullam dolores.<br/>
            Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur...
          </p>
        </article>
      </main>
    </div>
  );
}

export default Blog_pagebody;
