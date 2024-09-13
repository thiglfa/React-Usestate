import { useState } from "react"

export default function TesteState1() {

    const [aluno, setAluno] = useState('João')

    return (
        <div>
            <h2>Teste de Estado 1</h2>
            <p>O nome do aluno é: {aluno}</p>
            <button onClick={() => setAluno('Maria')}>Mudar</button>
        </div>
    )
}