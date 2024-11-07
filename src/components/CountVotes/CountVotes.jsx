import { useState } from "react"

function CountVotes() {
    const [cont, setCont] = useState(0)

    return (
        <div>
            <button onClick={() => { setCont(cont + 1) }} className="btn btn-warning">Apoyanos!: {cont} votos</button>
        </div>
    )
}

export default CountVotes