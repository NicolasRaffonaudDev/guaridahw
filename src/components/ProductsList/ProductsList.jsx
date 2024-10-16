import CategoriesList from "../CategoriesList/CategoriesList"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Product from "../Product/Product"

const Featured = () => {
    return (
      <>
        <section>
          <div className="jumbotron jumbotron-fluid">
            <div className="container-mdfluid text-center text-white mx-3 my-5 p-4 bg-danger fw-bold">
              <h1 className="display-md-4">PRODUCTOS DESTACADOS</h1>
              <p className="lead">Tenemos algunas opciones Pre-armadas que encajan perfecto con vos!</p>
            </div>
          </div>
        
          <div className='container'>
            <div className='row g-4'> {/* Cambié g-5 a g-4 para un espaciado adecuado */}
              <div className='col-12 col-sm-6 col-lg-4'>
                <div className='card'>
                  <Product img="https://mla-s1-p.mlstatic.com/882919-MLA31351753474_072019-F.jpg" name="PC COMBO FORTNITE" price="899.000" />
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-4'>
                <div className='card'>
                  <Product img="https://http2.mlstatic.com/D_NQ_NP_630257-MLA47133516056_082021-F.jpg" name="PC COMBO GTA V EDICION GOLD" price="1.090.000" />
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-4'>
                <div className='card'>
                  <Product img="https://http2.mlstatic.com/D_NQ_NP_883275-MLA26007317432_092017-W.jpg" name="PC COMBO PUBG STARTER PACK" price="959.000" />
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-4'>
                <div className='card'>
                  <Product img="https://http2.mlstatic.com/D_NQ_NP_846481-MLA51648396900_092022-O.webp" name="PC COMBO CRISYS EXTENDED EDITION" price="1.399.000" />
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-4'>
                <div className='card'>
                  <Product img="https://http2.mlstatic.com/D_NQ_NP_623901-MLA52701044914_122022-W.jpg" name="PC COMBO CYBERPUNK2077" price="1.799.000" />
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-4'>
                <div className='card'>
                  <Product img="https://http2.mlstatic.com/D_NQ_NP_736468-MLA54339629438_032023-O.webp" name="PC COMBO VALORANT" price="1.179.000" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CategoriesList/>
      </>
    )
  }

export default Featured