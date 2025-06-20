// ❓ Pregunta 4: Uso condicional de hooks
// 🧩 ¿Por qué esto está prohibido en React? ¿Cómo deberías reestructurarlo?

import { useEffect } from 'react';

function Saludo({ nombre }) {
    /*CODIGO DESECHADO
    if (nombre) {
        useEffect(() => {
        console.log('Hola ' + nombre);
        }, []);
    }*/

    //CODIGO CORREGIDO
    useEffect(() => {
    if (nombre) {
        console.log('Hola ' + nombre);
        }
    }, [nombre]);

    //EXPLICACION: Reestructuré el uso de useEffect para que no sea condicional. El hook ahora se llama siempre —como requiere la arquitectura de React— y contiene una condición interna que evita ejecutar la lógica innecesariamente. Esto elimina errores de ejecución y asegura que el orden de los hooks se mantenga estable en todos los renders.

    return <h1>Bienvenido</h1>;
}