import AnimatedPages from "../components/AnimatedPages";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Project.css";
import { Link, NavLink } from "react-router-dom";
import { SiAdobeaftereffects, SiAdobeillustrator } from "react-icons/si";

function LogoLdfs() {
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
            <h2 className="project-title">Logo LDFS Campeonatos</h2>
            <p className="project-subtitle">
              ¿Querés algo similar? No dudes en consultar!
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="item-title">Cliente</td>
                <td className="text text-wrap">
                  Liga Departamental de Fútbol de Soriano
                </td>
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
                <td className="text">2022</td>
              </tr>
            </tbody>
          </table>
          <Link to={"/contact"}>
            <button className="main-btn">Contactar</button>
          </Link>
        </section>
        <section className="section-container">
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/logo-ldfs.png"
            alt=""
          />
          <p className="project-details">
            Este logo fue creado para los campeonatos organizados por la Liga
            Departamental de Fútbol de Soriano. Fue utilizado tanto en redes
            sociales como en los elementos utilizados por la Liga como
            cartelería, papelería, etc.
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
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/logo-ldfs-orig.png"
            alt=""
          />
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/ldfs-black.png"
            alt=""
          />
          <img
            src="https://qcqbvjvbppwpnrwdnpdq.supabase.co/storage/v1/object/public/mcprojects-folder/foto-bristol.jpeg"
            alt=""
          />
        </section>
      </div>
    </AnimatedPages>
  );
}

export default LogoLdfs;
