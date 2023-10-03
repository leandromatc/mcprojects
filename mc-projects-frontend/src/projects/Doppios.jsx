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

function Doppios() {
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
            <h2 className="project-title">Doppios.</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Duración</td>
                <td className="text">3 semanas</td>
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
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/doppios.png"
            alt=""
          />
          <p className="project-details">
            Doppios. fue una marca ficticia creada para desarrollar un
            E-Commerce como proyecto final del Bootcamp de Desarrollo Web de
            Hack Academy. El trabajo final fue grupal y llevó alrededor de 300
            horas de trabajo para nosotros.
          </p>
          <NavLink
            to={"https://doppios.vercel.app"}
            target="_blank"
            className="project-links"
          >
            Click aquí para visitar el e-commerce.
          </NavLink>
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
        </section>
        <section className="section-container">
          <img
            src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/about-1.avif"
            alt=""
          />
          <img
            src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/about-2.avif"
            alt=""
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default Doppios;
