import './blog_reply';

function Blog_reply(){
    return (
        <div className="blog-reply-container">
          <div className="author-section">
            <img
              className="author-image"
              src="https://via.placeholder.com/100"
              alt="Author"
            />
            <div className="author-details">
              <h3>George Washington</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ducimus
                itaque, autem necessitatibus voluptate quod mollitia delectus aut,
                sunt placeat nam vero culpa sapiente consectetur similique, inventore
                eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
    
          <div className="comments-section">
            <h4>6 Comments</h4>
            <div className="comment">
              <img
                className="commenter-image"
                src="https://via.placeholder.com/50"
                alt="Commenter"
              />
              <div className="comment-details">
                <h5>John Doe</h5>
                <span>October 03, 2018 at 2:21 PM</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur
                  quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                  officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                  impedit necessitatibus, nihil?
                </p>
                <button className="reply-button">Reply</button>
              </div>
            </div>
    
            <div className="comment">
              <img
                className="commenter-image"
                src="https://via.placeholder.com/50"
                alt="Commenter"
              />
              <div className="comment-details">
                <h5>John Doe</h5>
                <span>October 03, 2018 at 2:21 PM</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur
                  quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                  officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                  impedit necessitatibus, nihil?
                </p>
                <button className="reply-button">Reply</button>
              </div>
            </div>
    
            <div className="comment">
              <img
                className="commenter-image"
                src="https://via.placeholder.com/50"
                alt="Commenter"
              />
              <div className="comment-details">
                <h5>John Doe</h5>
                <span>October 03, 2018 at 2:21 PM</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur
                  quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                  officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                  impedit necessitatibus, nihil?
                </p>
                <button className="reply-button">Reply</button>
              </div>
            </div>
          </div>
        </div>
      )
};

export default Blog_reply;