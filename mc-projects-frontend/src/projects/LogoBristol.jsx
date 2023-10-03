import AnimatedPages from "../components/AnimatedPages";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Project.css";
import { Link } from "react-router-dom";
import { SiAdobeillustrator } from "react-icons/si";

function LogoBristol() {
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
            <h2 className="project-title">Escudo de Bristol</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Cliente</td>
                <td className="text text-wrap">Bristol</td>
              </tr>
              <tr>
                <td className="item-title">Contribución</td>
                <td className="text">Logo</td>
              </tr>
              <tr>
                <td className="item-title">Duración</td>
                <td className="text">1 mes</td>
              </tr>
              <tr>
                <td className="item-title">Año</td>
                <td className="text">2021</td>
              </tr>
            </tbody>
          </table>
          <Link to={"/contact"}>
            <button className="main-btn">Contactar</button>
          </Link>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/cab-escudo.png"
            alt=""
          />
          <p className="project-details">
            En el 2021 se modernizó el escudo del Club Atlético Bristol para
            adaptarlo más a esta época. Ahora se usa el nuevo escudo tanto para
            los elementos de redes sociales como para camisetas, carteles, etc.
          </p>

          <div className="project-tecnologies">
            <p className="text">Tecnologías usadas:</p>
            <div className="tec-icons">
              <SiAdobeillustrator className="tec-icon adobe" />
            </div>
          </div>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/bristol-old.png"
            alt=""
          />
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/cab-escudo.png"
            alt=""
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default LogoBristol;
