import "./Experience.css";

function Experience() {
  const experiences = [
    {
      number: "01",
      period: "2025 — PRESENT",
      company: "Dreams Distribution",
      role: "Warehouse Operative",
      type: "EMPLOYMENT",
      description:
        "Working in a fast-paced distribution environment, developing reliability, teamwork, organisation and the ability to work effectively to deadlines.",
      skills: [
        "Teamwork",
        "Organisation",
        "Time Management",
        "Safety",
      ],
    },

    {
      number: "02",
      period: "2025",
      company: "Rolls-Royce",
      role: "Aeronautics & Automation Virtual Experience",
      type: "INDUSTRY EXPERIENCE",
      description:
        "Explored Industry 4.0 applications within aeronautical assembly, including robotic inspection, non-destructive testing and automated quality assurance.",
      skills: [
        "Industry 4.0",
        "Automation",
        "Robotic Inspection",
        "Quality Assurance",
      ],
    },

    {
      number: "03",
      period: "2021 — 2023",
      company: "Santech System Solutions",
      role: "Technical Assistant",
      type: "TECHNICAL EXPERIENCE",
      description:
        "Supported prototype and technical builds, including wiring, equipment handling and component integration. Developed practical troubleshooting skills by identifying and resolving hardware and software faults.",
      skills: [
        "Prototype Support",
        "Wiring",
        "Troubleshooting",
        "Component Integration",
      ],
    },

    {
      number: "04",
      period: "2024 — 2025",
      company: "Shelter Charity Shop",
      role: "Volunteer",
      type: "VOLUNTEERING",
      description:
        "Developed communication, teamwork and customer-facing skills while supporting the day-to-day operation of a busy charity shop.",
      skills: [
        "Communication",
        "Teamwork",
        "Customer Service",
        "Responsibility",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Heading */}
        <div className="experience-heading">
          <div>
            <span className="experience-label">
              03 / EXPERIENCE
            </span>

            <h2>
              Experience that
              <br />
              shaped my approach.
            </h2>
          </div>

          <p>
            From technical support and manufacturing
            environments to industry-focused virtual
            experience, each role has helped develop
            practical and professional skills.
          </p>
        </div>


        {/* Experience list */}
        <div className="experience-list">

          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={experience.number}
            >

              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-main">

                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span>{experience.type}</span>
                </div>

                <h3>{experience.company}</h3>

                <h4>{experience.role}</h4>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              <div className="experience-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>


        {/* Bottom statement */}
        <div className="experience-bottom">

          <span>ENGINEERING DIRECTION</span>

          <p>
            Mechanical Engineering&nbsp; • &nbsp;
            Mechatronics&nbsp; • &nbsp;
            Automation&nbsp; • &nbsp;
            Controls
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;