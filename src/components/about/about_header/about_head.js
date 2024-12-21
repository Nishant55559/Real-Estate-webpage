
import './about_head.css';
import about from './about.jpeg'

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>About Us</h1>
        <nav className="breadcrumb">
          <a href="/">Home</a> <span>&gt;</span> <span>About</span>
        </nav>
      </div>
    </div>
  );
}

export default Header;
