// ❓ Pregunta 5: Falta cleanup en temporizador
// 🧩 ¿Qué falta aquí? ¿Por qué es peligroso no hacer cleanup?

import { useEffect } from 'react';

function Temporizador() {
    useEffect(() => {
        const id = setInterval(() => {
        console.log('Tick');
        }, 1000);
        // Falta algo...
        return () => clearInterval(id); // Esto es lo que falta

        //EXPLICACION: Se agregó clearInterval(id) en una función de limpieza dentro de useEffect. Esta corrección previene que el temporizador siga corriendo luego de que el componente se desmonta, evitando posibles memory leaks o actividad innecesaria en segundo plano. Mantiene el componente limpio, eficiente y conforme a buenas prácticas de ciclo de vida en React.

    }, []);

    return <p>Contando...</p>;
}
