import './PortfolioSection.css';

const PortfolioSection = () => {
  const portfolioItems = [
    { title: 'Project One', description: 'An innovative solution for modern businesses.' },
    { title: 'Project Two', description: 'A groundbreaking project transforming the industry.' },
    { title: 'Project Three', description: 'A creative approach to problem-solving.' },
  ];

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <div className="portfolio-container">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-card">
            <h3 className="portfolio-item-title">{item.title}</h3>
            <p className="portfolio-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
