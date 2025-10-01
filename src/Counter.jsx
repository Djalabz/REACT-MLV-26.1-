// Faire en sorte que lorsque je clique sur le bouton d'incrementation 
// sa couleur devienne rouge, puis gris lors du reclick, puis rouge etc

// Imports des fichiers, css, hooks etc 
import { useState } from "react"

// Mon composant fonctionnel de Counter
function Counter() {
    // 1 - Les données du composant (props, state etc)
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("lightgrey")

    // 2 - Les opérations / fonctions du composant (comportement dans le pdf)
    function increment() {
        setCount(count+1)

        if (color == "lightgrey") {
            setColor("red")
        } else {
            setColor("lightgrey")
        }
    }

    // 3 - Le rendu, en JSX, du composant
    return (
        <>

            <h2>Compteur : {count}</h2>  
            <button
                onClick={() => increment()}
                style={{ backgroundColor: color }}
                >+
            </button>
        </> 
    );
}

// Export (nécessaire) du composant en vue de l'importer ailleurs
export default Counter;