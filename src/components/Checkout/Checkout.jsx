import { useState } from 'react';
import { showConfirmationDialog, showSuccessSwal } from '../../utils/notifications';
import useCart from '../../hooks/useCart';
import useOrder from '../../hooks/useOrder';

const Checkout = () => {
  const { cartItems, cartCount, clearCart } = useCart();
  const { createOrder, loading, orderCreated } = useOrder();
  const [buyer, setBuyer] = useState({ firstName: '', lastName: '', phone: '', address: '' });

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({ ...prev, [name]: value }));
  };

  const confirmPurchase = () => {
    showConfirmationDialog(
      "¿Estás seguro?",
      "¿Deseas completar tu compra?",
      "Sí, completar compra",
      "Cancelar"
    ).then((result) => {
      if (result.isConfirmed) {
        createOrder(cartItems, cartCount, total, buyer, clearCart);
        showSuccessSwal("¡Confirmado!", "Tu orden está siendo procesada.");
      }
    });
  };

  if (loading) {
    return <h1 className="text-center mt-5">Se está generando la orden...</h1>;
  }

  if (orderCreated) {
    return <h1 className="text-center mt-5">¡La orden fue creada correctamente!</h1>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div
        className="p-4 shadow-lg rounded-3 bg-white"
        style={{ maxWidth: '500px', width: '100%' }}
      >
        <h2 className="text-center mb-4">Información del Comprador</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={buyer.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={buyer.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={buyer.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={buyer.address}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary decorative w-100 mt-3"
            onClick={confirmPurchase}
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;