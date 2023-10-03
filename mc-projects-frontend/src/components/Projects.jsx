import "./Projects.css";
import AnimatedPages from "./AnimatedPages";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoBootstrap,
  BiLogoGithub,
} from "react-icons/bi";
import {
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator,
} from "react-icons/si";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <AnimatedPages>
      <div className="container">
        <div className="page-title">Proyectos</div>
        <header className="projects-title">Algunos de mis proyectos</header>
        <section className="section-container">
          <div className="projects-section">
            <div className="main-project project-container">
              <div className="project-details">
                <p>E-Commerce</p>
                <p>2023</p>
              </div>
              <Link to={"/projects/doppios"}>
                <img
                  src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/doppios.png"
                  alt="Doppios"
                  className="project-img"
                />
              </Link>
              <Link to={"/projects/doppios"}>
                <h4 className="project-title">Doppios.</h4>
              </Link>
              <div className="project-tecnologies">
                <p className="text">Tecnologías usadas:</p>
                <div className="tec-icons">
                  <BiLogoJavascript className="tec-icon" />
                  <BiLogoReact className="tec-icon" />
                  <BiLogoHtml5 className="tec-icon" />
                  <BiLogoCss3 className="tec-icon" />
                  <BiLogoMongodb className="tec-icon" />
                  <BiLogoNodejs className="tec-icon" />
                  <BiLogoBootstrap className="tec-icon" />
                  <BiLogoGithub className="tec-icon" />
                </div>
              </div>
            </div>
            <div className="other-projects">
              <div className="project-container">
                <div className="project-details">
                  <p>Poster</p>
                  <p>2023</p>
                </div>
                <img
                  src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/conferencia-ofi.png"
                  alt="Escudo Bristol"
                  className="project-img"
                />
                <h4 className="project-title">Conferencia en OFI</h4>
                <div className="project-tecnologies">
                  <p className="text">Tecnologías usadas:</p>
                  <div className="tec-icons">
                    <SiAdobephotoshop className="tec-icon adobe" />
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="project-details">
                  <p>Poster</p>
                  <p>2023</p>
                </div>
                <img
                  src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/bailazo-flyer.png"
                  alt="Doppios"
                  className="project-img"
                />
                <h4 className="project-title">Bailazo del Parque</h4>
                <div className="project-tecnologies">
                  <p className="text">Tecnologías usadas:</p>
                  <div className="tec-icons">
                    <SiAdobephotoshop className="tec-icon adobe" />
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="project-details">
                  <p>Motion Graphic</p>
                  <p>2023</p>
                </div>
                <Link to={"/projects/paca-campeon"}>
                  <img
                    src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/paca-camp.png"
                    alt="Doppios"
                    className="project-img"
                  />
                </Link>
                <Link to={"/projects/paca-campeon"}>
                  <h4 className="project-title">Pacaembú Bigua campeón</h4>
                </Link>
                <div className="project-tecnologies">
                  <p className="text">Tecnologías usadas:</p>
                  <div className="tec-icons">
                    <SiAdobeillustrator className="tec-icon adobe" />
                    <SiAdobeaftereffects className="tec-icon adobe" />
                  </div>
                </div>
              </div>

              <div className="project-container">
                <div className="project-details">
                  <p>Logo</p>
                  <p>2022</p>
                </div>
                <img
                  src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/logo-ldfs.png"
                  alt="Escudo Bristol"
                  className="project-img"
                />
                <h4 className="project-title">Logo campeonatos LDFS</h4>
                <div className="project-tecnologies">
                  <p className="text">Tecnologías usadas:</p>
                  <div className="tec-icons">
                    <SiAdobeillustrator className="tec-icon adobe" />
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="project-details">
                  <p>Logo</p>
                  <p>2021</p>
                </div>
                <img
                  src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/cab-escudo.png"
                  alt="Escudo Bristol"
                  className="project-img"
                />
                <h4 className="project-title">Escudo Bristol</h4>
                <div className="project-tecnologies">
                  <p className="text">Tecnologías usadas:</p>
                  <div className="tec-icons">
                    <SiAdobeillustrator className="tec-icon adobe" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPages>
  );
}

export default Projects;
