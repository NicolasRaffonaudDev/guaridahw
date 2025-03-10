import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-guaridaHw3.webp"
import Cart from "../Cart/Cart";
import "./NavBar.css"
import useCart from '../../hooks/useCart';

function Nav({ title }) {
  const { cartCount } = useCart(); // Accedemos al estado del carrito

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark opacity-75 p-3">
          <div className="container-fluid">
            <img src={logo} className="logo mx-5" alt="logo" />
            <Link className="navbar-brand text-white fw-bold fs-4" to="/">{title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink activeClassName="active-link" className="nav-link text-warning" to="/">Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active-link" className="nav-link text-warning" to="/category">Catalogo</NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/login">Sesion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/contact">Contacto</Link>
                </li>
                <li className="text-white">
                  <Cart cartCount={cartCount} />
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