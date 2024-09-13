import { useState } from "react"

export default function TesteState2() {

    const [count, setCount] = useState(0)

    let valor = 0

    const aumentar = () => {
        setCount(count + 1)
        valor = valor + 1
    }

    const diminuir = () => {
        setCount(count - 1)
        valor = valor + 1
    }


    return (
        <div>
            <h2>Teste de Estado 2</h2>
            <p>Contagem = {count}</p>
            <p>Valor = {valor}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )

}