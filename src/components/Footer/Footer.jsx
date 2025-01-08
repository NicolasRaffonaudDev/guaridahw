import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark opacity-75 text-light py-5">
      <div className="container">
        {/* Primera fila */}
        <div className="row justify-content-between">
          {/* Acerca de */}
          <div className="col-md-4">
            <h5>GuaridaHW</h5>
            <p>La mejor tecnología y hardware al alcance de tu mano. Construye tu mundo digital con nosotros.</p>
          </div>

          {/* Navegación rápida */}
          <div className="col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">Inicio</Link>
                </li>
              <li>
                <Link to="/category" className="text-light text-decoration-none">Catalogo</Link>
                </li>
              <li>
                <Link to="/login" className="text-light text-decoration-none">Sesion</Link>
                </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">Contacto</Link>
                </li>
            </ul>
          </div>

          {/* Suscripción y Redes Sociales */}
          <div className="col-md-4">
            <h5>Suscríbete</h5>
            <p>Recibe noticias y ofertas exclusivas en tu correo.</p>
            <form className="mb-3">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu email"
                />
              </div>
              <button type="submit" className="btn btn-primary decorative">Suscribirse</button>
            </form>
            <div>
              <a href="https://www.facebook.com" className="text-light me-3">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a href="https://www.instagram.com" className="text-light me-3">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.twitter.com" className="text-light">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Segunda fila */}
        <div className="text-center mt-4">
          <p>&copy; 2025 GuaridaHW. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
