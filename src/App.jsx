import { useEffect, useState } from "react"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar"
import Carousel from "./components/Carousel/Carousel";
import Featured from "./components/ProductsList/ProductsList"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import MercadoLibre from "./components/MercadoLibe/MercadoLibre";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
/* import { seedProducts } from "./services/upload/upload"; FUNCION DE AGREGADO DE ARRAYS A FIRESTORE DATABASE*/



function App() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
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
        <NavBar cartCount={cartCount} title="SpaceStore" />
        <Routes>
          <Route exact path='/' element={<Carousel />} />
          <Route exact path='/category' element={<Featured />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer addToCart={addToCart} />} />
          <Route exact path='/detail/:productId' element={<ItemDetailContainer addToCart={addToCart} />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='*' element={<h1>:( 404 Not found</h1>} />
        </Routes>
        {/* <MercadoLibre /> */}
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
