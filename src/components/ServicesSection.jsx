import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        <a href="https://www.geeksforgeeks.org/web-development/" target="_blank" rel="noopener noreferrer" className="service-card">
          <h3>Web Development</h3>
          <p>Building modern, responsive, and user-friendly websites.</p>
        </a>
        <a href="https://www.techtarget.com/whatis/definition/search-engine-optimization-SEO" target="_blank" rel="noopener noreferrer" className="service-card">
          <h3>SEO Optimization</h3>
          <p>Improving your website's visibility on search engines.</p>
        </a>
        <a href="https://blog.hubspot.com/marketing/branding" target="_blank" rel="noopener noreferrer" className="service-card">
          <h3>Branding</h3>
          <p>Creating unique brand identities that resonate.</p>
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
