import AnimatedPages from "./AnimatedPages";
import { Link } from "react-router-dom";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import "./Contact.css";

function Contact() {
  return (
    <AnimatedPages>
      <div className="container">
        <section className="section-title">
          <h1 className="page-title">Contacto</h1>
        </section>
        <section className="introduction">
          <h2 className="introduction-title">
            Manda tu <span className="introduction-emphasis">mensaje</span>
          </h2>
          <p className="introduction-desc">
            ¿Estás buscando empezar un proyecto? No dudes en consultar!
          </p>
          <p className="introduction-available">
            Disponible para nuevas oportunidades.
          </p>
          <Link to={"https://calendly.com/matosasleandro/30min"}>
            <button className="main-btn">
              <AiOutlineCalendar className="icon-btn" />
              Agendá una llamada
            </button>
          </Link>
        </section>
        <section className="section-container form-container">
          <form action="">
            <div className="contact-container">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Mensaje"
              required
            ></textarea>
            <div className="btn-container">
              <button type="submit" className="form-btn">
                Enviar
              </button>
            </div>
          </form>
          <div className="response-container">
            <AiOutlineClockCircle />
            <p className="text">
              <span className="text-emphasis">Respuesta promedio</span> 12 horas
            </p>
          </div>
        </section>
      </div>
    </AnimatedPages>
  );
}

export default Contact;
