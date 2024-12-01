import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Othman's Website. All rights reserved.</p>
        <div className="social-links">
          <a href="https://x.com/NeverPaysCash" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/_.othman_s" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@othmansaids" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://t.me/+255747583412" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://wa.me/255747583412" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
