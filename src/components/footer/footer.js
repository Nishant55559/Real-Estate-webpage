
import './footer.css';
import seven from './seven.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#hilight">Hilight</a></li>
            <li><a href="#concepts">Concepts</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-rights">
          <p> 2024 Dimas Indra.<br />All rights reserved.</p>
        </div>
      </div>

      <div className="footer-brand">
        <h1 className="footer-logo">CASA MIA</h1>
      </div>
    </footer>
  );
}

export default Footer;
