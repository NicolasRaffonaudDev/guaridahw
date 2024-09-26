import logo from "../../assets/logo_2-removebg-preview.png"
import "./NavBar.css"

function Nav() {
    return (
      <div>
        <header>
        <nav class="navbar navbar-dark navbar-expand-md bg-dark p-3">
              <div class="container-fluid">
                <img src={logo} class="logo" alt="logo" />
                <a class="navbar-brand text-white fw-bold fs-4" href="#">NGR Technical Computer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link text-warning" href="./pages/tienda.html">Tienda</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-warning" href="#sector-servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-warning" href="./pages/login.html">Login</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-warning" href="./pages/contacto.html">Contacto</a>
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