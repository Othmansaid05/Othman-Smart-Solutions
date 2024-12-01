import './HeroSection.css';
import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <h1 className="hero-title">Welcome to The Future</h1>
        <p className="hero-subtitle">We bring your ideas to life with creativity and innovation.</p>
        <a href="https://openai.com/" target="_blank" rel="noopener noreferrer" className="hero-button">Powered by OpenAI</a>
        <div className="hero-socials">
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
    </section>
  );
};

export default HeroSection;
