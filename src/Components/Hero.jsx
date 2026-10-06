import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-label">
          <span></span>
          ENGINEERING APPRENTICESHIP CANDIDATE
        </div>

        <h1>DANIEL BOATENG</h1>

        <h2>
          Manufacturing <span>•</span> Mechatronics <span>•</span> Automation
        </h2>

        <p>
          Practical engineering experience across manufacturing,
          CAD, CNC/CAM, electronics and automation.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            VIEW PROJECTS <span>→</span>
          </a>

          <a href="#contact" className="btn-secondary">
            LET'S CONNECT
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;