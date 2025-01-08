import { Link } from "react-router-dom";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="text-center py-3 mb-4 contact-title-container">
        <h2 className="mb-0 contact-title">
          Contacto
        </h2>
      </div>
      <div className="row g-4">
        {/* Información de Contacto */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase text-primary fw-bold mb-5">
                Información de Contacto
              </h5>
              <ul className="list-unstyled text-muted mb-5">
                <li>
                  <strong>Nombre:</strong> GuaridaHW
                </li>
                <li>
                  <strong>Teléfono:</strong> +54 9 11 1234-5678
                </li>
                <li>
                  <strong>Email:</strong> info@guaridahw.com
                </li>
                <li>
                  <strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00
                </li>
              </ul>
              <p className="text-secondary">
                ¿Tienes alguna pregunta? No dudes en ponerte en contacto con nosotros. 
                Estamos aquí para ayudarte.
              </p>
            </div>
          </div>
        </div>

        {/* Ubicación */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <h5 className="card-title text-uppercase text-primary fw-bold mb-3 text-center">
                Ubicación
              </h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.741787308858!2d-58.27190352349923!3d-34.7116921632098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e04d4eb9c27%3A0x15adfedb33285ccf!2sLebensohn%20100%2C%20B1878%20Bernal%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1736343977883!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de regreso */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary btn-lg shadow decorative">
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
};

export default Contact;
