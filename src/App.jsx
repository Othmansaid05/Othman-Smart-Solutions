import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection id="about-section"/>
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
