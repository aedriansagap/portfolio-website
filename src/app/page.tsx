import "./page.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Building Digital <br />
            <span className="text-gradient">Experiences.</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="hero-cta animate-fade-in delay-200">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-outline">Contact Me</button>
          </div>
        </div>
        <div className="hero-graphic animate-fade-in delay-300">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
        </div>
      </section>

      <section id="about" className="section glass-panel">
        <div className="section-content">
          <h2>About Me</h2>
          <p>
            This section is a placeholder. Here you can write about your background, experience, and the unique perspective you bring to the table.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="project-card glass-panel">
              <div className="project-image-placeholder"></div>
              <div className="project-info">
                <h3>Project Title {item}</h3>
                <p>A brief description of what this project is and what technologies were used to build it.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
