import { useEffect, useState } from "react";
import { galleryFilters, galleryImages } from "../data/gallery";
import "./Projects.css";

const projects = [
  ["01", "Smart Environmental Pipeline", "EMBEDDED SYSTEMS / DATA", "A project connecting Arduino-based environmental sensing with Python data handling and analysis.", ["Arduino", "Python", "Sensors", "Data Analytics"], "environmental-telemetry-graph.png", "Environmental telemetry graph", "smart-environmental-pipeline"],
  ["02", "Predictive Asset Condition Monitor", "AUTOMATION / INDUSTRY 4.0", "An Industry 4.0 project exploring sensor data, programming and automation for monitoring equipment condition.", ["Python", "ESP32", "Sensors", "Automation"], "predictive-maintenance-test-setup.png", "Predictive asset condition monitoring test setup", "predictive-asset-condition-monitor"],
  ["03", "ESP32 Wireless IoT Gateway", "IoT / EMBEDDED SYSTEMS", "An embedded systems project exploring wireless sensor data and communication between physical devices and software.", ["ESP32", "C++", "IoT", "Embedded Systems"], "embedded-system-simulation-02.png", "ESP32 embedded system simulation", "esp32-wireless-iot-gateway"],
  ["04", "Smart Renewable Microgrid Controller", "CONTROL SYSTEMS / ENERGY", "A control-oriented project focused on monitoring and managing a renewable energy system through programming and engineering control concepts.", ["Control Systems", "Python", "MATLAB", "Automation"], "renewable-microgrid-control-system.png", "Renewable microgrid control system", "smart-renewable-microgrid-controller"],
].map(([number, title, category, description, technologies, image, alt, repo]) => ({ number, title, category, description, technologies, image, alt, repo }));

const homepageGalleryImages = [
  "cnc-machining-practical-work.png",
  "cad-engineering-component..png",
  "oscilloscope-signal-analysis.png",
  "embedded-system-simulation-01.png",
  "environmental-data-dashboard.png",
  "predictive-maintenance-telemetry.png",
  "microgrid-control-response.png",
].map((file) => galleryImages.find((image) => image.file === file));

function Projects() {
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const carouselImages = filter === "ALL"
    ? homepageGalleryImages
    : homepageGalleryImages.filter((image) => image.category === filter);
  const featuredImage = carouselImages[featuredIndex];
  const hasCarouselNavigation = carouselImages.length > 1;
  const changeFeatured = (direction) => setFeaturedIndex((current) => (current + direction + carouselImages.length) % carouselImages.length);
  const selectFilter = (nextFilter) => {
    setFilter(nextFilter);
    setFeaturedIndex(0);
  };

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setSelected(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [selected]);

  return <section className="projects-section" id="projects">
    <div className="projects-container">
      <div className="projects-heading"><div><span className="projects-label">04 / PROJECTS</span><h2>Engineering ideas<br />turned into projects.</h2></div><p>A selection of technical work combining engineering, embedded systems, programming, automation and practical problem solving.</p></div>
      <div className="projects-list">
        {projects.map((project, index) => <article className={`project-item ${index % 2 ? "project-reverse" : ""}`} key={project.number}>
          <div className="project-image-wrapper"><img src={`/projects/${project.image}`} alt={project.alt} className="project-image" loading={index ? "lazy" : "eager"} /><div className="project-image-number">{project.number}</div></div>
          <div className="project-content"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a href={`https://github.com/danbuildseng99/${project.repo}`} target="_blank" rel="noreferrer" className="project-link">VIEW PROJECT <span aria-hidden="true">↗</span></a></div>
        </article>)}
      </div>
      <section className="project-gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading"><div><span className="projects-label">PROJECT GALLERY</span><h3 id="gallery-title">Engineering work in detail.</h3></div><p>Selected evidence from project development, testing, CAD and practical engineering work.</p></div>
        <div className="gallery-filters" aria-label="Filter homepage gallery images">{galleryFilters.map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} onClick={() => selectFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
        <div className="featured-gallery">
          <div className="featured-image-frame">
            <button type="button" className="featured-image-trigger" onClick={() => setSelected(featuredImage)} aria-label={`View larger image: ${featuredImage.alt}`}><img key={featuredImage.file} src={`/projects/${featuredImage.file}`} alt={featuredImage.alt} /></button>
            {hasCarouselNavigation && <><button type="button" className="gallery-arrow gallery-arrow-previous" onClick={() => changeFeatured(-1)} aria-label="Show previous gallery image">←</button><button type="button" className="gallery-arrow gallery-arrow-next" onClick={() => changeFeatured(1)} aria-label="Show next gallery image">→</button></>}
            <span className="featured-image-category">{featuredImage.category}</span>
          </div>
          <div className="gallery-thumbnails" aria-label="Homepage gallery thumbnails">
            {carouselImages.map((image, index) => <button type="button" key={image.file} className={featuredIndex === index ? "is-active" : ""} onClick={() => setFeaturedIndex(index)} aria-pressed={featuredIndex === index} aria-label={`Show ${image.alt}`}><img src={`/projects/${image.file}`} alt="" loading="lazy" /></button>)}
          </div>
        </div>
        <a className="full-gallery-link" href="/gallery">VIEW FULL GALLERY <span aria-hidden="true">→</span></a>
      </section>
      <div className="projects-footer"><p>More engineering work and experiments are available on GitHub.</p><a href="https://github.com/danbuildseng99" target="_blank" rel="noreferrer">VIEW GITHUB <span aria-hidden="true">↗</span></a></div>
    </div>
    {selected && <div className="image-lightbox" role="presentation" onClick={() => setSelected(null)}><div className="lightbox-content" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={(event) => event.stopPropagation()}><button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image viewer">×</button><img src={`/projects/${selected.file}`} alt={selected.alt} /><p>{selected.alt}</p></div></div>}
  </section>;
}

export default Projects;
