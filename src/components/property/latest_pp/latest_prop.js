import './latest_pp.css';
import { FaBed, FaBath, FaHome } from "react-icons/fa";
import { BsSquare } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import prop1 from './prop1.jpg'
import prop2 from './prop2.jpg'
import prop3 from './prop3.jpg'
import prop4 from './prop4.jpg'
import prop5 from './prop5.jpg'
import prop6 from './prop6.jpg'
import prop7 from './prop7.jpg'
import prop8 from './prop8.jpg'
import prop9 from './prop9.jpg'

const properties = [
    {
      id: 1,
      image: prop1,
      price: "Rs 3,050/month",
      oldPrice: "8,000",
      beds: 3,
      baths: 2,
      sqft: "1,878 sqft",
      title: "The Blue Home",
      location: "Oakland",
    },
    {
      id: 2,
      image: prop2,
      price: "Rs 3,000/month",
      oldPrice: "7,000",
      beds: 2,
      baths: 2,
      sqft: "1,878 sqft",
      title: "The Serene Retreat",
      location: "Sydeny",
    },
    {
      id: 3,
      image: prop3,
      price: "Rs 3,050/month",
      oldPrice: "8,000",
      beds: 3,
      baths: 2,
      sqft: "1,878 sqft",
      title: "Golden Horizon Villa",
      location: "South town",
    },
    {
      id: 4,
      image: prop4,
      price: "Rs 3,050/month",
      oldPrice: "8,000",
      beds: 3,
      baths: 2,
      sqft: "1,878 sqft",
      title: "The Coastal Haven",
      location: "Indian side",
    },
    {
      id: 5,
      image: prop5,
      price: "Rs 3,050/month",
      oldPrice: "8,000",
      beds: 3,
      baths: 2,
      sqft: "1,878 sqft",
      title: "Emerald Grove Estate",
      location: "DownTown",
    },
    {
      id: 6,
      image: prop6,
      price: "Rs 3,050/month",
      oldPrice: "8,000",
      beds: 3,
      baths: 2,
      sqft: "1,878 sqft",
      title: "The Majestic View",
      location: "Brisbane",
    },
    {
        id: 7,
        image: prop7,
        price: "Rs 3,050/month",
        oldPrice: "8,000",
        beds: 3,
        baths: 2,
        sqft: "1,878 sqft",
        title: "Sunrise Meadow Residence",
        location: "Brisbane",
      },
      {
        id: 8,
        image: prop8,
        price: "Rs 3,050/month",
        oldPrice: "8,000",
        beds: 3,
        baths: 2,
        sqft: "1,878 sqft",
        title: "Crystal Waters Abode",
        location: "Brisbane",
      },
      {
        id: 9,
        image: prop9,
        price: "Rs 3,050/month",
        oldPrice: "8,000",
        beds: 3,
        baths: 2,
        sqft: "1,878 sqft",
        title: "Crystal Waters Abode",
        location: "Brisbane",
      },
  ];

    function Latest_Property(){
    return (
      <div className="properties-container">
        
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-details">
              <div className="property-price">
                <span className="old-price">{property.oldPrice}</span>
                <span className="current-price">{property.price}</span>
              </div>
              <div className="property-meta">
                <span>
                  <FaBed /> {property.beds} Beds
                </span>
                <span>
                  <FaBath /> {property.baths} Baths
                </span>
                <span>
                  <BsSquare /> {property.sqft}
                </span>
                <span>
                  <FaHome /> {property.title}
                </span>
              </div>
              <p className="property-location">{property.location}</p>
              <button className="property-link">
                <FiLink />
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  };
  
  export default Latest_Property;