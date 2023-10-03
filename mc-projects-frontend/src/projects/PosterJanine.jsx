import AnimatedPages from "../components/AnimatedPages";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Project.css";
import { Link } from "react-router-dom";
import { SiAdobephotoshop } from "react-icons/si";

function PosterJanine() {
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
            <h2 className="project-title">Conferencia Janine Szpara</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Cliente</td>
                <td className="text text-wrap">
                  Organización de Fútbol del Interior
                </td>
              </tr>
              <tr>
                <td className="item-title">Contribución</td>
                <td className="text">Poster</td>
              </tr>
              <tr>
                <td className="item-title">Duración</td>
                <td className="text">3 días</td>
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
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/conferencia-ofi.png"
            alt=""
            className="project-main-img"
          />
          <p className="project-details">
            Este poster fue creado para la conferencia de Janine Szpara en
            conjunto con la Organización de Fútbol del Interior
          </p>

          <div className="project-tecnologies">
            <p className="text">Tecnologías usadas:</p>
            <div className="tec-icons">
              <SiAdobephotoshop className="tec-icon adobe" />
            </div>
          </div>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/conferencia-ofi.png"
            alt=""
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default PosterJanine;
