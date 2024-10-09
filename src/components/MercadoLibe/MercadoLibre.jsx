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
        <div>
            <h1>MERCADO LIBRE API</h1>
            { itemsMl.length === 0 ? (
            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
                <button>Search</button>
            </form> ) : ( 
            <section>
            {itemsMl.map( itemsMl => {
                return (
                <article key={itemsMl.id}>
                    <h2>{itemsMl.title}</h2>
                    <img src={itemsMl.thumbnail} />
                    <h3>{itemsMl.price}</h3>
                </article> )
                })  
            } </section> 
            )}
            
        </div>
    )
}

export default MercadoLibre