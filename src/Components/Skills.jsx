import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "CAD & Engineering Design",
      description:
        "Design and modelling skills developed through engineering study and practical projects.",
      skills: [
        "SolidWorks",
        "AutoCAD",
        "Engineering Drawings",
        "Component Modelling",
        "Design for Manufacture",
      ],
    },

    {
      number: "02",
      title: "Manufacturing & Fabrication",
      description:
        "Hands-on manufacturing experience covering machining, fabrication and precision work.",
      skills: [
        "CNC Machining",
        "CAM Workflows",
        "Manual Machining",
        "Bench Fitting",
        "Metal Fabrication",
        "Dimensional Inspection",
      ],
    },

    {
      number: "03",
      title: "Controls & Automation",
      description:
        "Developing knowledge of control systems, industrial automation and mechatronic systems.",
      skills: [
        "PLC Fundamentals",
        "Ladder Logic",
        "Basic PID Control",
        "Sensors & Actuators",
        "Arduino Control",
        "Industry 4.0",
      ],
    },

    {
      number: "04",
      title: "Programming & Embedded Systems",
      description:
        "Programming and embedded-system skills used to connect software, hardware and engineering applications.",
      skills: [
        "Python",
        "C++",
        "Arduino",
        "ESP32",
        "I2C / SPI",
        "Programming Logic",
        "Data Structures",
      ],
    },

    {
      number: "05",
      title: "Engineering Practice",
      description:
        "Practical engineering habits focused on safety, quality, troubleshooting and continuous improvement.",
      skills: [
        "Risk Assessment / RAMS",
        "Health & Safety",
        "Quality Control",
        "Structured Troubleshooting",
        "Lean Manufacturing",
        "Technical Problem Solving",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <div>
            <span className="skills-label">02 / SKILLS</span>

            <h2>
              Engineering skills built
              <br />
              through practice.
            </h2>
          </div>

          <p className="skills-intro">
            A combination of hands-on manufacturing,
            engineering design, automation, electronics
            and programming.
          </p>
        </div>


        {/* Skills grid */}
        <div className="skills-grid">

          {skillGroups.map((group) => (
            <article
              className="skill-card"
              key={group.number}
            >

              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </article>
          ))}

        </div>


        {/* Bottom statement */}
        <div className="skills-bottom">

          <span className="skills-bottom-label">
            ENGINEERING FOCUS
          </span>

          <p>
            Mechanical Engineering&nbsp; • &nbsp;
            Manufacturing&nbsp; • &nbsp;
            Mechatronics&nbsp; • &nbsp;
            Automation&nbsp; • &nbsp;
            Controls
          </p>

        </div>

      </div>
    </section>
  );
}

export default Skills;