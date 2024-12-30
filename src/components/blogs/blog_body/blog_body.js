import './blog_body.css';
import b1 from './b1.jpg';
import b2 from './b2.jpg';
import b3 from './b3.jpg';
import b4 from './b4.jpg';
import b5 from './b5.jpg';
import b6 from './b6.jpg';
import { useNavigate } from 'react-router-dom';


export const blogs = [
  {
    id: 1,
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 24, 2019',
    author: 'Admin',
    comments: 3,
    image: b1,
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 2,
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 24, 2019',
    author: 'Admin',
    comments: 3,
    image: b2,
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 3,
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 24, 2019',
    author: 'Admin',
    comments: 3,
    image: b3,
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 4,
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 24, 2019',
    author: 'Admin',
    comments: 3,
    image: b4,
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 5,
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 24, 2019',
    author: 'Admin',
    comments: 3,
    image: b5,
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 6,
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 24, 2019',
    author: 'Admin',
    comments: 3,
    image: b6,
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  }
];

function Blog_body({ blogsData }) {
  const navigate = useNavigate();

  if (!Array.isArray(blogsData) || blogsData.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <div className="blog-container">
      {blogsData.map((blog) => (
        <div
          key={blog.id}
          className="blog-card"
          onClick={() => navigate(`/blogs/${blog.id}`)} // Navigate to the blog page
          style={{ cursor: 'pointer' }} // Make it look clickable
        >
          <div className="blog-image-wrapper">
            <img src={blog.image} alt={blog.title} className="blog-image" />
          </div>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-meta">
            {blog.date} | {blog.author} | {blog.comments} Comments
          </p>
          <p className="blog-description">{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog_body;
