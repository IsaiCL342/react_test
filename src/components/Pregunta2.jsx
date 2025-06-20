// ❓ Pregunta 2: useEffect mal usado (dependencias incorrectas)
// 🧩 ¿Qué sucede con este código? ¿Qué está mal con las dependencias?

import { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    /*CODIGO DESECHADO
    useEffect(() => {
        setInterval(() => {
        setTime(new Date());
        }, 1000);
    }, [time]);*/

    //Codigo corregido
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // buena práctica: limpieza
    }, []);

    //Explicacion: Removí time de la lista de dependencias porque su presencia causaba múltiples ejecuciones innecesarias del efecto, resultando en un crecimiento exponencial de intervalos. Usé una lista vacía [] para ejecutar el efecto solo una vez al montar el componente, y agregué una función de limpieza con clearInterval para evitar fugas de memoria. Esta solución sigue las mejores prácticas del ciclo de vida en componentes funcionales con useEffect.

    return <p>{time.toLocaleTimeString()}</p>;
}
