// ❓ Pregunta 3: Limpieza olvidada en efectos
// 🧩 ¿Qué pasa si este componente se monta y desmonta repetidamente? ¿Cómo solucionarlo?

import { useEffect } from 'react';

function ClickLogger() {
    /*CODIGO DESECHADO
    useEffect(() => {
        window.addEventListener('click', () => console.log('Click!'));
    }, []);*/

    //CODIGO CORREGIDO
    useEffect(() => {
    const handleClick = () => console.log('Click!');
    window.addEventListener('click', handleClick);

    return () => {
        window.removeEventListener('click', handleClick);
        };
    }, []);

    //EXPLICACION: Se agregó una función de limpieza en el useEffect para evitar que múltiples event listeners se acumulen con cada montaje del componente. Esto previene duplicaciones de logs, mejora el rendimiento y respeta el ciclo de vida esperado del componente. También se asignó el callback handleClick a una constante para poder removerlo correctamente con removeEventListener.


    return <p>Haz clic en cualquier parte</p>;
}