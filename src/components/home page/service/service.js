
import "./service.css";
import { FaPiggyBank, FaWallet, FaFileAlt, FaLock } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <FaPiggyBank size={50} color="#F48C3DFF" />,
      title: "No Downpayment",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      icon: <FaWallet size={50} color="#F48C3DFF" />,
      title: "All Cash Offer",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      icon: <FaFileAlt size={50} color="#F48C3DFF" />,
      title: "Experts in Your Corner",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      icon: <FaLock size={50} color="#F48C3DFF" />,
      title: "Locked in Pricing",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <div className="service-container">
      <div className="service-header">
        <h3 className="service-subtitle">OUR SERVICES</h3>
        <h2 className="service-title">The smartest way to buy a home</h2>
      </div>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h4 className="service-card-title">{service.title}</h4>
            <p className="service-card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Service;
