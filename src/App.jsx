

function App() {
  

  return (
    <>
      <Nav />
      <Destacados />
    </>
  )
}

function Nav () {
  return (
    <div>
    <header>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark p-3">
            <div className="container-fluid">
              <a className="navbar-brand text-white fw-bold fs-4" href="#">NGR Technical Computer</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link text-warning" href="./pages/tienda.html
                    ">Tienda</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-warning" href="#sector-servicios">Servicios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-warning" href="./pages/login.html">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-warning" href="./pages/contacto.html">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
      </nav>
    </header>
    </div>
  )
}

const Destacados = () => {
  return (
    <section>
      <h1>PRODUCTOS DESTACADOS</h1>
      <div className='card'>
        <Producto img="https://falabella.scene7.com/is/image/FalabellaPE/gsc_119266187_2279226_1?wid=800&hei=800&qlt=70" name="SAMSUNG 18KG INVERTER" price="14141"/>
        <Producto img="https://falabella.scene7.com/is/image/FalabellaPE/116718085_1?wid=800&hei=800&qlt=70" name="SAMSUNG 13KG INVERTER" price="22222"/>
        <Producto img="https://promart.vteximg.com.br/arquivos/ids/6516726-444-444/image-3396f111d885446aad4535dc08bf3b45.jpg?v=637981663967400000" name="SAMSUNG 19KG INVERTER" price="545454"/>
        <Producto img="https://jumboargentina.vtexassets.com/arquivos/ids/812891/Lavarropas-Samsung-7kg-Inverter-Ww70aa046bwu-Blanco-1-941095.jpg?v=638440522365300000" name="SAMSUNG 7KG INVERTER" price="123123"/>
        <Producto img="https://falabella.scene7.com/is/image/FalabellaPE/gsc_121754980_3170371_1?wid=800&hei=800&qlt=70" name="SAMSUNG 24KG INVERTER" price="123123"/>
        <Producto img="https://1now.my/wp-content/uploads/2023/06/bfebd689c0974e3625b36cf7a19e2d26.png" name="SAMSUNG 13KG INVERTER" price="123123"/>
      </div>
    </section>
  )
}

function Producto (data) {
  return (
    <div>
      <h2>{data.name}</h2>
      <img width="350" src={data.img} alt={data.name} />
      <p>Price: ${data.price}</p>
    </div>
  )
}

export default App
