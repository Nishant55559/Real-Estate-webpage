import people from './people.jpg'
import './people.css';

function People(){
  return (
    <div className="people">
      <div className="people-image">
        
        <img src={people} alt="Group of people by a car" />
      </div>
      <div className="people-content">
        <h2>We Put People First.</h2>
        <p>
          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
        <p>
          On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
        </p>
      </div>
    </div>
  )
};

export default People;
