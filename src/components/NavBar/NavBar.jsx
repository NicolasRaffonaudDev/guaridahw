import logo from "../../assets/logo_2-removebg-preview.png"
import CountVotes from "../CountVotes/CountVotes";
import "./NavBar.css"

function Nav() {
    return (
      <div>
        <header>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark p-3">
              <div className="container-fluid">
                <img src={logo} className="logo" alt="logo" />
                <a className="navbar-brand text-white fw-bold fs-4" href="#">NGR Technical Computer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link text-warning" href="./pages/tienda.html">Tienda</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-warning" href="#sector-servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-warning" href="./pages/login.html">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-warning" href="./pages/contacto.html">Contacto</a>
                    </li>
                    <li>
                      <CountVotes/>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>
      </div>
    )
  }

  export default Nav;