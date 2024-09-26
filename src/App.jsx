import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import Featured from "./components/ProductsList/ProductsList"


function App() {

  let [valor, setValor] = useState(0);
  console.log(setValor)
  console.log(valor)

  return (
    <>
      <NavBar />
      <Featured />
    </>
  )
}

export default App
