// ❓ Pregunta 1: Estado no reactivo
// 🧩 ¿Cuál es el error? ¿Qué pasa con count++? ¿Cómo lo corregirías?
import { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    
    /*CODIGO DESECHADO
    const increment = () => {
        count++;
        console.log(count);
    };*/

    //Codigo corregido
    const increment = () => {
    setCount(prevCount => prevCount + 1);
    console.log(count); // Este log se referirá al valor anterior por la naturaleza asincrónica del estado
    };

    //Cambié la mutación directa de count++ por una llamada a setCount, que es la forma correcta de actualizar el estado en componentes funcionales de React. Esta corrección asegura que React detecte el cambio y vuelva a renderizar el componente, mostrando el nuevo valor correctamente. Además, usar la versión funcional de setCount previene errores en escenarios donde las actualizaciones de estado son asincrónicas o dependientes del valor anterior.

    return <button onClick={increment}>Count: {count}</button>;
}
