import { useState } from "react";

const MercadoLibre = () => {
     const [itemsMl, setItemsMl] = useState ([])
     const [input, setInput] = useState ('')
    /* useEffect(()=>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares`)
        .then((res)=>{
            return res.json()
      
    })
    .then((articles)=> setItemsMl(articles.results))
    .catch((error) => console.log(error))
  }, []) */ 
    const handleSubmit  = (event) => {
        event.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then((res)=>{
            return res.json()
      
        })
        .then((articles)=> setItemsMl(articles.results))
        .catch((error) => console.log(error));
    }
    
    return (
        <div className="container text-center">
            <h1>MERCADO LIBRE API</h1>
            { itemsMl.length === 0 ? (
            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
                <button>Search</button>
            </form> ) : ( 
            <section className="d-flex flex-wrap justify-content-around">
            {itemsMl.map( itemsMl => {
                return (
                <article className="card align-items-center text-center p-3 my-3" style={{width: 400}} key={itemsMl.id}>
                    <h5 className="fw-bold">{itemsMl.title}</h5>
                    <img className="card-img-top m-4" style={{width: 100, height:110}} src={itemsMl.thumbnail} />
                    <h3>$ {itemsMl.price}</h3>
                </article> )
                })  
            } </section> 
            )}
            
        </div>
    )
}

export default MercadoLibre