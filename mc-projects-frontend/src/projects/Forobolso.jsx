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

function Forobolso() {
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
            <h2 className="project-title">ForoBolso</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Duración</td>
                <td className="text">6 semanas</td>
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
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/ForoBolso.png?t=2024-04-09T20%3A11%3A01.169Z"
            alt=""
          />
          <p className="project-details">
            ForoBolso es una web de intercambio de opiniones para hinchas del
            Club Nacional de Football. Como usuario desde hace tiempo, participé
            en la actualización del Foro hacia la tecnología de NodeBB ayudando
            en la parte gráfica como en la parte de adaptar la plantilla elegida
            a los colores de Nacional con CSS.
          </p>
          <NavLink
            to={"https://forobolso.uy"}
            target="_blank"
            className="project-links"
          >
            Click aquí para visitar el foro.
          </NavLink>
          <div className="project-tecnologies">
            <p className="text">Tecnologías usadas:</p>
            <div className="tec-icons">
              <BiLogoCss3 className="tec-icon" />
              <BiLogoMongodb className="tec-icon" />
              <BiLogoNodejs className="tec-icon" />
              <BiLogoGithub className="tec-icon" />
            </div>
          </div>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/foro1.png"
            alt="Screen from ForoBolso.uy"
          />
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/foro2.png?t=2024-04-09T20%3A26%3A38.347Z"
            alt="Screen from ForoBolso.uy"
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default Forobolso;
