// App.js
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import ItemDetailPage from "./pages/ItemDetailPage";

/* import { seedProducts } from "./services/upload/upload"; FUNCION DE AGREGADO DE ARRAYS A FIRESTORE DATABASE*/

function App() {
  /* FUNCION PARA PUSHEAR ARRAYS A MI COLECCION DE FIRESTORE */
  /*   useEffect(() => {
    const uploadProducts = async () => {
      try {
        console.log("Cargando productos a Firestore...");
        await seedProducts();
        console.log("Productos cargados exitosamente.");
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };
    uploadProducts();
  }, []); */

  return (
    <CartProvider>
      <BrowserRouter>

        <div className="d-flex flex-column min-vh-100">
          <NavBar title="Guarida del HardWare" />

          <main className="flex-grow-1">
            <Routes>

              <Route exact path="/" element={<Home />} />
              <Route path="/category/:categoryId?" element={<Category />} />
              <Route path="/detail/:productId" element={<ItemDetailPage />} />

              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/contact" element={<ContactPage />} />

              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<CheckoutPage />} />

              {/* Ruta para página no encontrada */}
              <Route path="*" element={<h1>:( 404 Not found</h1>} />
            </Routes>
          </main>

          <Footer />
        </div>

        <ToastContainer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
