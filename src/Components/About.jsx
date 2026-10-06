import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <span className="section-label">01 / ABOUT ME</span>

          <h2>
            Building practical engineering
            <br />
            skills for the future.
          </h2>
        </div>


        <div className="about-card">

          <div className="about-content">

            <p className="about-intro">
              I am Daniel Boateng, a Level 3 Engineering
              student based in Birmingham, UK.
            </p>

            <p>
              I am interested in mechanical engineering,
              manufacturing, mechatronics and automation.
              I enjoy working on practical engineering
              problems and turning ideas into working
              systems through CAD, CNC machining,
              electronics and programming.
            </p>

            <p>
              My experience combines hands-on manufacturing
              with developing skills in automation,
              embedded systems and engineering software.
              I have worked with technologies including
              SolidWorks, AutoCAD, CNC/CAM, Arduino,
              C++, Python and PLC fundamentals.
            </p>

            <p>
              My goal is to continue developing as an
              engineer through an apprenticeship where I
              can build on my practical manufacturing skills
              while growing further in mechanical,
              mechatronics, automation or controls
              engineering.
            </p>

            <a href="#projects" className="about-link">
              EXPLORE MY PROJECTS
              <span>→</span>
            </a>

          </div>


          <div className="about-highlights">

            <div className="highlight">
              <span>01</span>

              <div>
                <h3>Manufacturing</h3>

                <p>
                  CNC machining, CAM, manual machining,
                  bench fitting and metal fabrication.
                </p>
              </div>
            </div>


            <div className="highlight">
              <span>02</span>

              <div>
                <h3>Mechatronics</h3>

                <p>
                  Mechanical systems combined with
                  electronics, sensors, actuators and
                  embedded control.
                </p>
              </div>
            </div>


            <div className="highlight">
              <span>03</span>

              <div>
                <h3>Automation</h3>

                <p>
                  PLC fundamentals, Arduino, Python,
                  C++ and Industry 4.0 applications.
                </p>
              </div>
            </div>

          </div>

        </div>


        <div className="about-stats">

          <div className="stat">
            <strong>2025</strong>
            <span>
              WorldSkills UK
              <br />
              National Participant
            </span>
          </div>

          <div className="stat">
            <strong>LEVEL 3</strong>
            <span>
              Engineering
              <br />
              Student
            </span>
          </div>

          <div className="stat">
            <strong>DIST.</strong>
            <span>
              Manufacturing
              <br />
              Engineering
            </span>
          </div>

          <div className="stat">
            <strong>UK</strong>
            <span>
              Birmingham
              <br />
              United Kingdom
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;