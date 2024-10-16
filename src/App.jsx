import { CartProvider } from "./context/CartContext";
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import Featured from "./components/ProductsList/ProductsList"
import Carousel from "./components/Carousel/Carousel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MercadoLibre from "./components/MercadoLibe/MercadoLibre";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";



function App() {// Accedemos al estado del carrito
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    //aca queda el ultimo checkpoint
    <CartProvider>
      <BrowserRouter>
        <NavBar cartCount={cartCount} title="SpaceStore"/>
        <Routes>
          <Route exact path='/' element={<Carousel />}/>
          <Route exact path='/category' element={<Featured />}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer addToCart={addToCart}/>}/>
          <Route exact path='/detail/:productId' element={<ItemDetailContainer addToCart={addToCart}/>}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='*' element={<h1>:( 404 Not found</h1>}/>
        </Routes>
        {/* <MercadoLibre /> */}
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
