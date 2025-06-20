// ❓ Pregunta 3: Limpieza olvidada en efectos
// 🧩 ¿Qué pasa si este componente se monta y desmonta repetidamente? ¿Cómo solucionarlo?

import { useEffect } from 'react';

function ClickLogger() {
    useEffect(() => {
        window.addEventListener('click', () => console.log('Click!'));
    }, []);

    return <p>Haz clic en cualquier parte</p>;
}