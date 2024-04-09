import AnimatedPages from "../components/AnimatedPages";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Project.css";
import { Link, NavLink } from "react-router-dom";
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
} from "react-icons/bi";

function Portfolio() {
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
            <h2 className="project-title">MC Projects Portfolio</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Duración</td>
                <td className="text">1 semana</td>
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
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/MC%20Web.png?t=2024-04-09T20%3A07%3A18.300Z"
            alt="Logo MC Projects"
          />
          <p className="project-details">
            MC Projects es mi propia marca que comenzó siendo de diseño gráfico
            y ahora también sobre todo lo relacionado al desarrollo web.
          </p>
          <NavLink
            to={"https://mcprojects.vercel.app"}
            target="_blank"
            className="project-links"
          >
            Click aquí para visitar el portfolio.
          </NavLink>
          <div className="project-tecnologies">
            <p className="text">Tecnologías usadas:</p>
            <div className="tec-icons">
              <BiLogoReact className="tec-icon" />
              <BiLogoCss3 className="tec-icon" />
              <BiLogoNodejs className="tec-icon" />
              <BiLogoGithub className="tec-icon" />
            </div>
          </div>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/mc%20web.jpg?t=2024-04-09T20%3A19%3A50.468Z"
            alt="Screen from the Portfolio"
          />
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/mc%20web%202.jpg?t=2024-04-09T20%3A20%3A15.036Z"
            alt="Screen from the Portfolio"
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default Portfolio;
