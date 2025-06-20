// ❓ Pregunta 8: Consumo de PokéAPI con async/await y errores
// 🧩 ¿Qué error tiene el uso de useEffect aquí?
// Corrige el código para que funcione correctamente y explique por qué.


import { useState, useEffect } from 'react';

function PokemonCard({ id }) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);

    /*CODIGO DESECHADO
    useEffect(async () => {
        try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
        const data = await response.json();
        setPokemon(data);
        } catch {
    
        setError(true);
        }
    }, [id]);*/
    
    //CODIGO CORREGIDO
    useEffect(() => {
    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        } catch (err) {
            setError(true);
        }
    };

    fetchPokemon();
    }, [id]);
    
    //EXPLICACION: Se reestructuró el uso de useEffect para evitar el uso directo de funciones async, lo cual viola el contrato esperado por React. Además, se reforzó la robustez del renderizado con validaciones seguras para evitar excepciones por datos incompletos. Esto mejora la resiliencia del componente ante errores de red o respuestas inesperadas del API.

    if (error) return <p>Algo salió mal...</p>;
    if (!pokemon) return <p>Cargando...</p>;


    return (
    <div style={{ border: '2px solid #f00', padding: 20, borderRadius: 10 }}>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} width={150} />
      <p>Tipo: {pokemon.types[0].type.name}</p> {/* ERROR: ¿Y si no tiene tipo? */}
      <p>Especie: {pokemon.species.name}</p> {/* ERROR: especies es un objeto anidado */}
    </div>
    );
}

export default PokemonCard;