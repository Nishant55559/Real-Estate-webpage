import './blog_reply';
import { FaUserCircle } from "react-icons/fa";


const comments = [
  {
    name: "Jacob Smith",
    date: "January 9, 2018 at 2:21PM",
    text: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
  },
  {
    name: "Chris Meyer",
    date: "January 9, 2018 at 2:21PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
  },
];

function Blog_reply(){
  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <div className="commenter-icon">
            <FaUserCircle size={50} color="#555" />
          </div>
          <div className="comment-content">
            <h4>{comment.name}</h4>
            <span>{comment.date}</span>
            <p>{comment.text}</p>
            <button className="reply-button">REPLY</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog_reply;