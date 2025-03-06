// App.js
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Featured from "./components/ProductsList/ProductsList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

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
            {/* Rutas principales */}
            <Route exact path="/" element={<Carousel />} />
            <Route exact path="/category" element={<CategoriesList />} />

            {/* Rutas de Productos */}
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/detail/:productId" element={<ItemDetailContainer />} />

            {/* Otras secciones */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/contact" element={<Contact />} />

            {/* Rutas de Carrito y Checkout */}
            <Route exact path="/cart" element={<CartView />} />
            <Route exact path="/checkout" element={<Checkout />} />

            {/* Ruta para página no encontrada */}
            <Route path="*" element={<h1>:( 404 Not found</h1>} />
          </Routes>
        </main>
              
        <Footer />
        <ToastContainer />
        </div>
        
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
