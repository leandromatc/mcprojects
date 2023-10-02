import AnimatedPages from "./AnimatedPages";
import "./Clients.css";

function Clients() {
  return (
    <AnimatedPages>
      <div className="container">
        <section className="section-title">
          <h1 className="page-title">Clientes</h1>
        </section>
        <section className="section-container">
          <p className="text">
            Estos son algunos de los clientes que han confiado en mi trabajo.
          </p>
          <div className="clients">
            <div className="client">
              <img src="/img/cv10.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">CV10 Mercedes</h4>
                <p className="client-job">Social Media</p>
              </div>
            </div>
            <div className="client">
              <img src="/img/LDFS.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">
                  Liga Departamental de Fútbol de Soriano
                </h4>
                <p className="client-job">Social Media &middot; Branding</p>
              </div>
            </div>
            <div className="client">
              <img src="/img/bristol.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">Club Atlético Bristol</h4>
                <p className="client-job">Logo &middot; Social Media</p>
              </div>
            </div>
            <div className="client">
              <img src="/img/veintitres.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">Veintitrés Agency</h4>
                <p className="client-job">Logo &middot; Social Media</p>
              </div>
            </div>
            <div className="client">
              <img src="/img/cavani.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">Cavani Helados Artesanales</h4>
                <p className="client-job">Social Media</p>
              </div>
            </div>
            <div className="client">
              <img src="/img/js.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">JS Automotores</h4>
                <p className="client-job">Social Media</p>
              </div>
            </div>
            <div className="client">
              <img src="/img/paca.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">Pacaembu Bigua</h4>
                <p className="client-job">Social Media</p>
              </div>
            </div>
            <div className="client">
              <img src="/img/ofi.png" alt="" className="client-img" />
              <div className="client-detail">
                <h4 className="client-title">
                  Organización de Fútbol del Interior
                </h4>
                <p className="client-job">Flyer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPages>
  );
}

export default Clients;
