import React, { useState } from 'react';

const Input = () => {
    const [nome, setNome] = useState('');

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    return (
        <div>
            <input 
            type="text" 
            value={nome} 
            onChange={handleChange} 
            placeholder="Digite seu nome" 
            />
            <button onClick={() => console.log(nome)}>Mostrar Nome</button>
            <p>Renderizou: {nome}</p>
        </div>
    );
};

export default Input;