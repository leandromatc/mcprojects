import AnimatedPages from "../components/AnimatedPages";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Project.css";
import { Link, NavLink } from "react-router-dom";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

function Bailazo() {
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
            <h2 className="project-title">Bailazo del Parque 3a edición</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Cliente</td>
                <td className="text">Bristol</td>
              </tr>
              <tr>
                <td className="item-title">Contribución</td>
                <td className="text">Branding</td>
              </tr>
              <tr>
                <td className="item-title">Duración</td>
                <td className="text">2 meses</td>
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
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/bailazo.png"
            alt=""
            className="project-main-img"
          />
          <p className="project-details">
            Se realizó todo el branding para las redes sociales y cartelería de
            la tercera edición del Bailazo del Parque organizado por el Club
            Bristol.
          </p>

          <div className="project-tecnologies">
            <p className="text">Tecnologías usadas:</p>
            <div className="tec-icons">
              <SiAdobeillustrator className="tec-icon adobe" />
              <SiAdobeaftereffects className="tec-icon adobe" />
              <SiAdobephotoshop className="tec-icon adobe" />
            </div>
          </div>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/logo-bailazo.png"
            alt=""
          />
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/bailazo.png"
            alt=""
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default Bailazo;
