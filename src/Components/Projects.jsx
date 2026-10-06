import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Smart Environmental Pipeline",
      category: "EMBEDDED SYSTEMS / DATA",
      description:
        "A smart environmental data pipeline combining an Arduino-based sensing layer with Python analytics to collect, process and analyse environmental data.",
      technologies: ["Arduino", "Python", "Sensors", "Data Analytics"],
      github:
        "https://github.com/danbuildseng99/smart-environmental-pipeline",
    },
    {
      number: "02",
      title: "Predictive Maintenance",
      category: "AUTOMATION / INDUSTRY 4.0",
      description:
        "An engineering-focused project exploring predictive maintenance and the use of sensor data, programming and automation to monitor equipment condition.",
      technologies: ["Python", "ESP32", "Sensors", "Automation"],
      github:
        "https://github.com/danbuildseng99/predictive-asset-condition-monitor",
    },
    {
      number: "03",
      title: "ESP32 IoT Gateway",
      category: "IoT / EMBEDDED SYSTEMS",
      description:
        "An embedded systems project exploring connected hardware, sensor data and communication between physical devices and software.",
      technologies: ["ESP32", "C++", "IoT", "Embedded Systems"],
      github:
        "https://github.com/danbuildseng99/esp32-wireless-iot-gateway",
    },
    {
      number: "04",
      title: "Renewable Microgrid Controller",
      category: "CONTROL SYSTEMS / ENERGY",
      description:
        "A control-oriented project focused on managing a renewable energy system through programming, monitoring and engineering control concepts.",
      technologies: ["Control Systems", "Python", "MATLAB", "Automation"],
      github:
        "https://github.com/danbuildseng99/smart-renewable-microgrid-controller",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <div>
            <span className="projects-label">04 / PROJECTS</span>

            <h2>
              Engineering ideas
              <br />
              turned into projects.
            </h2>
          </div>

          <p>
            A selection of technical work combining engineering, embedded
            systems, programming, automation and practical problem solving.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className={`project-item ${
                index % 2 !== 0 ? "project-reverse" : ""
              }`}
              key={project.number}
            >
              <div className="project-image-wrapper" aria-hidden="true">
                <div className="project-visual">
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                  <div>
                    {project.technologies.slice(0, 3).map((technology) => (
                      <i key={technology}>{technology}</i>
                    ))}
                  </div>
                </div>
                <div className="project-image-number">
                  {project.number}
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  VIEW PROJECT <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p>
            More engineering work and experiments are available on GitHub.
          </p>

          <a
            href="https://github.com/danbuildseng99"
            target="_blank"
            rel="noreferrer"
          >
            VIEW GITHUB <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
