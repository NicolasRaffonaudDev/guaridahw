import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Tooltip } from "react-tooltip"; // Librería para tooltips
import "./Cart.css";

function Cart() {
    const { cartCount } = useContext(CartContext);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (cartCount > 0) {
            setAnimate(true);
            const timeout = setTimeout(() => setAnimate(false), 500);
            return () => clearTimeout(timeout);
        }
    }, [cartCount]);

    return (
        <>
            <Link
                className="nav-link d-flex align-items-center position-relative"
                to="/cart"
                aria-label={`Carrito de compras (${cartCount} productos)`}
                data-tooltip-id="cart-tooltip" // ID para el tooltip
                data-tooltip-content="Ver carrito" // Texto del tooltip
            >
                <FaShoppingCart size={24} className={`text-warning ${animate ? "cart-icon-animate" : ""}`} />
                {cartCount > 0 && (
                    <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartCount}
                    </span>
                )}
            </Link>
            <Tooltip id="cart-tooltip" place="bottom" /> {/* Tooltip */}
        </>
    );
}

export default Cart;