import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import Featured from "./components/ProductsList/ProductsList"
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Carousel from "./components/Carousel/Carousel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MercadoLibre from "./components/MercadoLibe/MercadoLibre";
import { Routes, BrowserRouter, Route } from "react-router-dom";



function App() {

  const [cartCount, setCartCount] = useState(0);
  console.log(setCartCount)

  const [view, setView] = useState('home');
  console.log(setView)
  console.log(view)

  return (
    //aca queda el ultimo checkpoint
    <BrowserRouter>
      <NavBar cartCount={cartCount} title="NGR Technical Computer"/>
      <Routes>
      <Route exact path='/' element={<Carousel />}/>
      <Route exact path='/featured' element={<Featured />}/>
        
        {/* {view === 'home' && (
          <>
            <Carousel />
            <Featured />
            <ItemListContainer />
          </>)}
        {view === 'products' && (
          <>
          <CategoriesList/>
          <Featured />
          <ItemListContainer />
          </>)}
        {view === 'mercadolibre' && (
          <MercadoLibre />)} */}
        <Route exact path='*' element={<h1>:( 404 Not found</h1>}/>        
      </Routes>     
      
      <ItemListContainer />
    </BrowserRouter>
    
  )
}

export default App
