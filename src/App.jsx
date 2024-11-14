// App.js
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import Featured from "./components/ProductsList/ProductsList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
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
        <NavBar title="Guarida del HardWare" />
        
        <Routes>
          {/* Rutas principales */}
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="/category" element={<Featured />} />

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

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
