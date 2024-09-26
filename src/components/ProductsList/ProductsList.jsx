import Product from "../Product/Product"

const Featured = () => {
    return (
      <section>
        <h1 className="text-center text-white m-5 p-4 bg-danger fw-bold">PRODUCTOS DESTACADOS</h1>
        <div className='container'>
          <div className='row g-5'>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://falabella.scene7.com/is/image/FalabellaPE/gsc_119266187_2279226_1?wid=800&hei=800&qlt=70" name="SAMSUNG 18KG INVERTER" price="14141" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://falabella.scene7.com/is/image/FalabellaPE/116718085_1?wid=800&hei=800&qlt=70" name="SAMSUNG 13KG INVERTER" price="22222" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://promart.vteximg.com.br/arquivos/ids/6516726-444-444/image-3396f111d885446aad4535dc08bf3b45.jpg?v=637981663967400000" name="SAMSUNG 19KG INVERTER" price="545454" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://jumboargentina.vtexassets.com/arquivos/ids/812891/Lavarropas-Samsung-7kg-Inverter-Ww70aa046bwu-Blanco-1-941095.jpg?v=638440522365300000" name="SAMSUNG 7KG INVERTER" price="123123" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://falabella.scene7.com/is/image/FalabellaPE/gsc_121754980_3170371_1?wid=800&hei=800&qlt=70" name="SAMSUNG 24KG INVERTER" price="123123" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://1now.my/wp-content/uploads/2023/06/bfebd689c0974e3625b36cf7a19e2d26.png" name="SAMSUNG 13KG INVERTER" price="123123" /></div>
          </div>
        </div>
      </section>
    )
  }

export default Featured