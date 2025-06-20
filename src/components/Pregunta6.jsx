// ❓ Pregunta 6: Estado mutado directamente en onChange
// 🧩 ¿Qué está mal aquí? ¿Por qué no funciona el input?
// ¿Cómo arreglarías el código para que funcione correctamente?

import { useState } from 'react';

function InputTracker() {
    const [value, setValue] = useState('');

    return (
        <input
        type="text"
        value={value}
        onChange={(e) => {
            value = e.target.value; 
        }}
        />
    );
}