import './agent_comment.css';
import pc134 from './pc134.jpeg'
import pc144 from './pc144.jpeg'

const comments = [
    {
      role: 'Business man',
      name: 'Gary laure',
      image: pc134, 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sapiente unde pariatur id, hic quos nihil nulla veritatis!',
      rating: 5,
    },
    {
      role: 'Business man',
      name: 'Jean Doe',
      image: pc144,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sapiente unde pariatur id, hic quos nihil nulla veritatis!',
      rating: 5,
    },

    {
        role: 'Business man',
        name: 'Anshuman Seth',
        image: pc144,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sapiente unde pariatur id, hic quos nihil nulla veritatis!',
        rating: 5,
      }
  ];


function Agent_comment(){
    return(

<div className="comment-section">
   
      {comments.map((comment, index) => (
        <div key={index} className="comment-card">
          <img src={comment.image} alt={comment.name} className="comment-image" />
          <div className="comment-content">
            <p className="comment-role">{comment.role}</p>
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-text">{comment.text}</p>
            <div className="comment-rating">
              {Array.from({ length: comment.rating }, (_, i) => (
                <span key={i} className="star">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    )
};

export default Agent_comment;