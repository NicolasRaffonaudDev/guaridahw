import { Link, NavLink } from "react-router-dom";
import useCart from '../../hooks/useCart';
import CyberLogo from "../CyberLogo/CyberLogo";
import Cart from "../Cart/Cart";
import "./NavBar.css"

function Nav() {
  const { cartCount } = useCart(); // Accedemos al estado del carrito

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark opacity-100 p-3">
          <div className="container-fluid">
            <CyberLogo />
            {/* <svg className="cyber-logo" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M50 15L20 50l30 35 30-35-30-35z" fill="url(#logoGradient)" />
              <path d="M45 25L30 40l15 15 15-15-15-15z" fill="var(--neon-pink)" />
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--neon-green)" />
                <stop offset="100%" stopColor="var(--cyber-blue)" />
              </linearGradient>
            </svg> */}
            <Link className="navbar-brand text-white fw-bold fs-4" to="/"><span className="brand-text">GUARIDA<br />DEL HARDWARE</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link text-white"} to="/">Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link text-white"} to="/category">Catalogo</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link text-white"} to="/login">Sesion</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link text-white"} to="/contact">Contacto</NavLink>
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