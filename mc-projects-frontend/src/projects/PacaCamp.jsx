import AnimatedPages from "../components/AnimatedPages";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Project.css";
import { Link, NavLink } from "react-router-dom";
import { SiAdobeaftereffects, SiAdobeillustrator } from "react-icons/si";

function PacaCamp() {
  return (
    <AnimatedPages>
      <div className="container">
        <Link to={"/projects"}>
          <div className="project-back">
            <BsFillArrowLeftCircleFill className="back-arrow" />
            <p className="text">Projects</p>
          </div>
        </Link>
        <section className="section-container project-info">
          <div className="project-title-container">
            <h2 className="project-title">Pacaembu Campeón 2023</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Cliente</td>
                <td className="text">Pacaembú Bigua</td>
              </tr>
              <tr>
                <td className="item-title">Contribución</td>
                <td className="text">Motion grahic</td>
              </tr>
              <tr>
                <td className="item-title">Duración</td>
                <td className="text">2 semanas</td>
              </tr>
              <tr>
                <td className="item-title">Año</td>
                <td className="text">2023</td>
              </tr>
            </tbody>
          </table>
          <Link to={"/contact"}>
            <button className="main-btn">Contactar</button>
          </Link>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/paca-camp.png"
            alt=""
          />
          <p className="project-details">
            Este motion graphic fue realizado en conjunto con Pacaembú Bigua
            para sus subir a sus redes sociales al momento de ser campeones de
            la Liga Regional de Básquetbol de Soriano.
          </p>

          <div className="project-tecnologies">
            <p className="text">Tecnologías usadas:</p>
            <div className="tec-icons">
              {" "}
              <SiAdobeillustrator className="tec-icon adobe" />
              <SiAdobeaftereffects className="tec-icon adobe" />
            </div>
          </div>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/FINAL.gif?t=2023-10-03T18%3A53%3A44.084Z"
            alt=""
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default PacaCamp;
