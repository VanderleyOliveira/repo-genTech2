import React, { useState } from 'react';

const Contador = () => {
    // Declarar uma variável de estado chamada "contador" e uma função para atualizá-la
    const [contador, setContador] = useState(0);

    // Função para incrementar o contador
    const incrementar = () => {
        setContador(contador + 1);
    };
   
    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
};

export default Contador;