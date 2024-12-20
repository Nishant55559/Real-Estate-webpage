import './faq.css';
import seven from './seven.jpg';
import React, { useState } from 'react';

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-container">
      {/* Left Section */}
      <div className="faq-left">
        <h1>Frequently Asked Questions</h1>
        <h3>What facilities are provided in this house?</h3>
        <img src={seven} alt="House" className="house-image" />
        <p>For 1.2M, enjoy spacious rooms, modern designs, and a private pool—crafted for your family's ultimate comfort.</p>
      </div>

      {/* Right Section */}
      <div className="faq-right">
        <div className="faq-item" onClick={() => toggleFAQ(1)}>
          <h3>What facilities are provided in this house?</h3>
          <span>{openFAQ === 1 ? '▲' : '▼'}</span>
        </div>
        {openFAQ === 1 && <p className="faq-answer">The house has spacious rooms, a private pool, and modern design.</p>}

        <div className="faq-item" onClick={() => toggleFAQ(2)}>
          <h3>What steps do I need to take to buy a house?</h3>
          <span>{openFAQ === 2 ? '▲' : '▼'}</span>
        </div>
        {openFAQ === 2 && <p className="faq-answer">Contact the sales team to proceed with the purchase process.</p>}

        <div className="faq-item" onClick={() => toggleFAQ(3)}>
          <h3>Is there an installment payment option?</h3>
          <span>{openFAQ === 3 ? '▲' : '▼'}</span>
        </div>
        {openFAQ === 3 && <p className="faq-answer">Yes, installment plans are available for 24 months.</p>}

        <div className="faq-item" onClick={() => toggleFAQ(4)}>
          <h3>Does the house price include other costs?</h3>
          <span>{openFAQ === 4 ? '▲' : '▼'}</span>
        </div>
        {openFAQ === 4 && <p className="faq-answer">Yes, the price is inclusive of all taxes and registration.</p>}

        <div className="faq-item" onClick={() => toggleFAQ(5)}>
          <h3>Is the house I bought ready to move into?</h3>
          <span>{openFAQ === 5 ? '▲' : '▼'}</span>
        </div>
        {openFAQ === 5 && <p className="faq-answer">Yes, the house is ready for immediate occupancy.</p>}
      </div>
    </div>
  );
}

export default FAQ;
