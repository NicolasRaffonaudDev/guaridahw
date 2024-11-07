import { useState } from "react";

const MercadoLibre = () => {
    const [itemsMl, setItemsMl] = useState([])
    const [input, setInput] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then((res) => {
                return res.json()
            })
            .then((articles) => setItemsMl(articles.results))
            .catch((error) => console.log(error));
    }

    return (
        <div className="container text-center">
            <div className="jumbotron jumbotron-fluid">
                <div className="container-mdfluid text-center text-dark mx-3 my-5 p-4 bg-warning fw-bold">
                    <h1 className="display-md-4">Mercado Libre</h1>
                    <p className="lead">Si, podes buscar cualquier producto que este publicado en Mercado Libre, proba buscar lo que quieras!</p>
                </div>
            </div>
            {itemsMl.length === 0 ? (
                <form onSubmit={handleSubmit}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button>Search</button>
                </form>) : (
                <section className="p-5 d-flex flex-wrap bg-dark justify-content-around">
                    {itemsMl.map(itemsMl => {
                        return (
                            <article className="card align-items-center text-center p-5 my-3" style={{ width: 400 }} key={itemsMl.id}>
                                <h5 className="fw-bold">{itemsMl.title}</h5>
                                <img className="card-img-top m-4" style={{ width: 100, height: 110 }} src={itemsMl.thumbnail} />
                                <h3>$ {itemsMl.price}</h3>
                            </article>)
                    })
                    } </section>
            )}

        </div>
    )
}

export default MercadoLibre