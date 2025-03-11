// App.js
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import routes from "./config/routes";
import Loading from "./components/Loading/Loading";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <NavBar title="Guarida del HardWare" />
          <main className="flex-grow-1">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  element={
                    <Suspense fallback={<Loading />}>
                      <route.component />
                    </Suspense>
                  }
                />
              ))}
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
