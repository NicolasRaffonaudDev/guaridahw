import { useState } from "react"

function CountVotes (){
    const [cont, setCont] = useState(0)

    return (
        <div>
            <button onClick={ () => {setCont(cont + 1)}} className="btn btn-warning">Apoyanos!: {cont} votos</button>
            <h1 className="text-white">: {cont}</h1>
        </div>
    )
}

export default CountVotes