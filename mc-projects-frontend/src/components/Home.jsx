import { Link } from "react-router-dom";
import "./Home.css";
import { AiOutlineMail } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

function Home() {
  return (
    <div className="container">
      <section className="my-profile">
        <img
          src="https://doppios.vercel.app/imgs/profile-lea.png"
          alt="Leandro Matosas picture"
          className="my-profile-img"
        />
        <div className="my-profile-details">
          <h2 className="my-profile-name">Leandro Matosas</h2>
          <p className="my-profile-location">Uruguay</p>
        </div>
      </section>
      <div className="introduction">
        <h2 className="introduction-title">
          Soy un{" "}
          <span className="introduction-emphasis">
            desarrollador full stack.
          </span>
        </h2>
        <p className="introduction-desc">
          Hola! Me llamo Leandro Matosas, tengo 27 años y vivo en Montevideo,
          Uruguay. Soy un estudiante de Ingeniería en Computación, pero al
          momento me desempeño como desarrollador Full Stack y también como
          Diseñador Gráfico.
        </p>
        <p className="introduction-available">
          Disponible para nuevas oportunidades.
        </p>

        <Link to={"contact"}>
          <button className="main-btn">
            <AiOutlineMail className="icon-btn" />
            Contactame
          </button>
        </Link>
      </div>
      <section className="section-container">
        <div className="projects-container">
          <h3 className="section-title">Proyectos</h3>
          <Link to={"projects"}>
            <div className="projects-text-container">
              <p className="all-projects">All</p>
              <BiRightArrowAlt className="arrow-icon" />
            </div>
          </Link>
        </div>
        <div className="find-links">
          <Link target="_blank">
            <div className="find-link-container">
              <p>Doppios</p>
              <span className="span-line"></span>
              <p>Ecommerce </p>
              &middot;
              <p>2023</p>
            </div>
          </Link>
          <Link target="_blank">
            <div className="find-link-container">
              <p>Pacaembu</p>
              <span className="span-line"></span>
              <p className="text-wrap">Motion Graphic</p>
              &middot;
              <p>2022</p>
            </div>
          </Link>
          <Link target="_blank">
            <div className="find-link-container">
              <p>LDFS</p>
              <span className="span-line"></span>
              <p>Logo</p>
              &middot;
              <p>2022</p>
            </div>
          </Link>
          <Link target="_blank">
            <div className="find-link-container">
              <p>Bristol</p>
              <span className="span-line"></span>
              <p>Branding</p>
              &middot;
              <p>2021</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="section-container">
        <h3 className="section-title">Donde encontrarme</h3>
        <div className="find-links">
          <Link to={"https://linkedin.com/in/leandro-matosas"} target="_blank">
            <div className="find-link-container">
              <p>Linkedin</p>
              <span className="span-line"></span>
              <p>Follow</p>
            </div>
          </Link>
          <Link to={"https://github.com/leandromatc"} target="_blank">
            <div className="find-link-container">
              <p>Github</p>
              <span className="span-line"></span>
              <p>Follow</p>
            </div>
          </Link>
          <Link to={"https://instagram.com/mc__projects"} target="_blank">
            <div className="find-link-container">
              <p>Instagram</p>
              <span className="span-line"></span>
              <p>Follow</p>
            </div>
          </Link>
          <Link to={"https://x.com/mc__projects"} target="_blank">
            <div className="find-link-container">
              <p>X</p>
              <span className="span-line"></span>
              <p>Follow</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
