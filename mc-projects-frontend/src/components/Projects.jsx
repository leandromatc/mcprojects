import "./Projects.css";
import AnimatedPages from "./AnimatedPages";

function Projects() {
  return (
    <AnimatedPages>
      <div className="container">
        <div className="page-title">Proyectos</div>
      </div>
      <section className="section-container">
        <h1 className="projects-title">Algunos de mis proyectos</h1>
        <div className="projects-section">
          <div className="main-project">
            <div className="project-details">
              <p>E-Commerce</p>
              <p>2023</p>
            </div>
            <img src="" alt="Doppios" className="project-img" />
          </div>
        </div>
      </section>
    </AnimatedPages>
  );
}

export default Projects;
