const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <h5>SpaceStore</h5>
            <p>Descubre el infinito en nuestra tienda online.</p>
          </div>
          <div className="col-md-4">
            <h5>Suscríbete</h5>
            <p>Recibe noticias y ofertas exclusivas.</p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu email"
                />
              </div>
              <button type="submit" className="btn btn-light mt-2">Suscribirse</button>
            </form>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
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
        <div className="text-center mt-4">
          <p>&copy; 2024 SpaceStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer