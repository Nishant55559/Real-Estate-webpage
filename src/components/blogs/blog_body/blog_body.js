import './blog_body.css';






const blogs = [
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'July 24, 2019',
      author: 'Admin',
      comments: 3,
      image: 'https://via.placeholder.com/300', // Replace with actual image URLs
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'July 24, 2019',
      author: 'Admin',
      comments: 3,
      image: 'https://via.placeholder.com/300',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'July 24, 2019',
      author: 'Admin',
      comments: 3,
      image: 'https://via.placeholder.com/300',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
          id: 4,
          title: 'Why Lead Generation is Key for Business Growth',
          date: 'July 24, 2019',
          author: 'Admin',
          comments: 3,
          image: 'https://via.placeholder.com/300', // Replace with actual image URLs
          description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {
          id: 4,
          title: 'Why Lead Generation is Key for Business Growth',
          date: 'July 24, 2019',
          author: 'Admin',
          comments: 3,
          image: 'https://via.placeholder.com/300',
          description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {
          id: 3,
          title: 'Why Lead Generation is Key for Business Growth',
          date: 'July 24, 2019',
          author: 'Admin',
          comments: 3,
          image: 'https://via.placeholder.com/300',
          description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        }
      
  ];


function Blog_body(){
    return (
        <div className="blog-container">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
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
};

export default Blog_body;