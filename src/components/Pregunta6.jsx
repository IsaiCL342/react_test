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
        /*CODIGO DESECHADO
        onChange={(e) => {
            value = e.target.value; 
        }}*/
        
        //CODIGO CORREGIDO
        onChange={(e) => {
            setValue(e.target.value);
        }}

        //EXPLICACION: Se reemplazó la asignación directa al estado por una llamada a setValue, lo que permite que React actualice correctamente el componente con cada cambio de entrada. Esta corrección asegura que el input sea controlado de forma coherente y visible para el usuario, evitando mutaciones ilegales que podrían romper la consistencia del estado.

        />
    );
}