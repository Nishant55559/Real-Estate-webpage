
import "./blog_box.css";

function Blog_box(){
  return (
    <div className="blogbox">
      <h3>Leave a comment</h3>
      <form className="blogbox-form">
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email *</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="website">Website</label>
        <input type="url" id="website" placeholder="Your Website (Optional)" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your Message" rows="5" required></textarea>

        <button type="submit" className="blogbox-button">
          Post Comment
        </button>
      </form>
    </div>
  )
};

export default Blog_box;
