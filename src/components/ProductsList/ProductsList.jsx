import Product from "../Product/Product"

const Featured = () => {
    return (
      <section>
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid text-center text-white mx-3 my-5 p-4 bg-danger fw-bold">
            <h1 class="display-4">PRODUCTOS DESTACADOS</h1>
            <p class="lead">Tenemos algunas opciones Pre-armadas que encajan perfecto con vos!</p>
          </div>
        </div>
        
        <div className='container'>
          <div className='row g-5'>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://mla-s1-p.mlstatic.com/882919-MLA31351753474_072019-F.jpg" name="PC COMBO FORTNITE" price="899.000" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://http2.mlstatic.com/D_NQ_NP_630257-MLA47133516056_082021-F.jpg" name="PC COMBO GTA V EDICION GOLD" price="1.090.000" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://http2.mlstatic.com/D_NQ_NP_883275-MLA26007317432_092017-W.jpg" name="PC COMBO PUBG STARTER PACK" price="959.000" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://http2.mlstatic.com/D_NQ_NP_846481-MLA51648396900_092022-O.webp" name="PC COMBO CRISYS EXTENDED EDITION" price="1.399.000" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://http2.mlstatic.com/D_NQ_NP_623901-MLA52701044914_122022-W.jpg" name="PC COMBO CYBERPUNK2077" price="1.799.000" /></div>
            <div className='card col-12 col-lg-6 col-xl-4'><Product img="https://http2.mlstatic.com/D_NQ_NP_736468-MLA54339629438_032023-O.webp" name="PC COMBO VALORANT" price="1.179.000" /></div>
          </div>
        </div>
      </section>
    )
  }

export default Featured