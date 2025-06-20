// ❓ Pregunta 2: useEffect mal usado (dependencias incorrectas)
// 🧩 ¿Qué sucede con este código? ¿Qué está mal con las dependencias?

import { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
        setTime(new Date());
        }, 1000);
    }, [time]);

    return <p>{time.toLocaleTimeString()}</p>;
}
