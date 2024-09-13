import { useState } from "react"
import Filho from "./Filho"

export default function TesteState4() {

    const [filho, setFilho] = useState(false)

    return (
        <div>
            <h2>Teste de Estado 4</h2>
            {filho ? <Filho /> : ''}
            <button onClick={() => setFilho(!filho)}>
                {filho ? 'Excluir filho' : 'Inserir filho'}
            </button>
        </div>
    )
}