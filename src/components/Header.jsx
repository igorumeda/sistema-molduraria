import { useState } from 'react'

export default function Header(){

    const [titulo, setTitulo] = useState('');

    return(
        <div>
            <h1>{titulo}</h1>
            <input type="text" placeholder='Digite o título' onChange={(e) => setTitulo(e.target.value)} />
        </div>
    )
}