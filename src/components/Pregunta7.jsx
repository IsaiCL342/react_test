// ❓ Pregunta 7: Renderizado infinito por efecto mal configurado
// 🧩 ¿Qué está causando que la app se trabe o entre en bucle infinito?
// ¿Cómo podrías evitarlo respetando la lógica?

import { useState, useEffect } from 'react';

function AutoIncrement() {
    const [count, setCount] = useState(0);

    /*CODIGO DESECHADO
    useEffect(() => {
        setCount(count + 1); 
    }, [count]);*/

    //CODIGO CORREGIDO
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        
        return () => clearInterval(intervalId);
    }, []);

    //EXPLICACION: Eliminé la dependencia directa de count en el efecto, ya que causaba un bucle de re-renderizados infinitos al actualizar el estado sin pausas. Reemplacé la lógica con un setInterval controlado que incrementa de forma estable usando la versión funcional de setCount, y agregué una función de limpieza para prevenir fugas. Esto mantiene la intención original sin comprometer el rendimiento ni la estabilidad del componente.

    return <p>Count: {count}</p>;
}