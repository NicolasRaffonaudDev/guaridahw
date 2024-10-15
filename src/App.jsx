import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import Featured from "./components/ProductsList/ProductsList"
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Carousel from "./components/Carousel/Carousel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MercadoLibre from "./components/MercadoLibe/MercadoLibre";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";



function App() {

  const [cartCount, setCartCount] = useState(0);
  /* console.log(setCartCount) */

  const [view, setView] = useState('home');
  /* console.log(setView)
  console.log(view) */

  return (
    //aca queda el ultimo checkpoint
    <BrowserRouter>
      <NavBar cartCount={cartCount} title="NGR Technical Computer"/>
      <Routes>
        <Route exact path='/' element={<Carousel />}/>     
        <Route exact path='/featured' element={<Featured />}/>
        <Route exact path='/detail/:productId' element={<ItemDetailContainer />}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route exact path='*' element={<h1>:( 404 Not found</h1>}/>        
      </Routes>
      <MercadoLibre />
      <Footer />     
    </BrowserRouter>
    
  )
}

export default App
