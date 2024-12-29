import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar">
      <div className="casamia">CASA MIA</div>
      <ul className="navitems">
        <li className="about">
          <Link to="/">Home</Link>
        </li>
        <li className="about">
          <Link to="/about">About</Link>
        </li>
        <li className="highlight">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="gallery">
          <Link to="/agents">Agents</Link>
        </li>
        <li className="faq">
          <Link to="/properties">Properties</Link>
        </li>
      </ul>
      <Link to="/contact">
        <button className="contact">Contact</button>
      </Link>
    </nav>
  );
}

export default Menu;
