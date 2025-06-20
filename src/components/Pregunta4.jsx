// ❓ Pregunta 4: Uso condicional de hooks
// 🧩 ¿Por qué esto está prohibido en React? ¿Cómo deberías reestructurarlo?

import { useEffect } from 'react';

function Saludo({ nombre }) {
    if (nombre) {
        useEffect(() => {
        console.log('Hola ' + nombre);
        }, []);
    }

    return <h1>Bienvenido</h1>;
}