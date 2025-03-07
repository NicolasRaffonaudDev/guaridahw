import CartView from '../components/CartView/CartView';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const Cart = () => {
  return (
    <div>
        <CategoriesList />
        <h1>Carrito de compras</h1>
        <CartView />
    </div>
  )
}

export default Cart;