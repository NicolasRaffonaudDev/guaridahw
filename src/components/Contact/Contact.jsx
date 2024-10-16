import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Información de Contacto</h5>
              <p><strong>Nombre del Emprendimiento:</strong> Tu Emprendimiento</p>
              <p><strong>Teléfono:</strong> +54 9 11 1234-5678</p>
              <p><strong>Email:</strong> info@tuemprendimiento.com</p>
              <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Ubicación</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092253!2d144.95373531531635!3d-37.81720997975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f16e1b1%3A0x5045675218ceed0!2sYour%20Location!5e0!3m2!1sen!2sus!4v1616147418721!5m2!1sen!2sus"
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

      <div className="text-center">
        <Link to="/" className="btn btn-primary">Volver a Inicio</Link>
      </div>
    </div>
  );
}

export default Contact;