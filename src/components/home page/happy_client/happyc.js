
import './happyc.css';
import happy1 from './happy1.jpg'
import happy2 from './happy2.jpg'

function HappyClient(){
  const testimonials = [
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Gary Chettiar",
      title: "Marketing Manager",
      image: happy1, 
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Rajbir Ray",
      title: "Marketing Manager",
      image: happy1, 
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Nishant Raj",
      title: "Marketing Manager",
      image: happy2,
    },
  ];

  return (
    <div className="happy-client">
      <div className="client-section-header">
      
        <h2 className="client-main-heading">Happy Clients</h2>
      </div>
      <div className="client-testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="client-card" key={index}>
            <p className="client-card-text">{testimonial.text}</p>
            <div className="client-profile">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="client-profile-image"
              />
              <div className="client-profile-info">
                <h3 className="client-profile-name">{testimonial.name}</h3>
                <p className="client-profile-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClient;
