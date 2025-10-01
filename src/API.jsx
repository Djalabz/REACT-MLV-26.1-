import { useState, useEffect } from "react"

function API() {
    // Le useEffect se place en haut comme le useState (généralement en dessous du useState)

    const [count, setCount] = useState(0)
    
    useEffect(
        // Partie 1 du useEffect : la fonction
        () => {console.log("effect")},

        // Partie 2 : Le tableau de dépendance qui détermine quand notre effet se déclenche
        // Si pas de tableau => L'effet se déclenche lors de tous les renders
        // Si tableau vide => l'effet se déclenche lors du premier render
        // Si tableau plein => l'effet se déclenche quand le state précisé dans le tableau change

        [count])

    return ( 
    <>
        <h2>Première requete vers une API</h2>
        <button onClick={() => setCount(prev => prev + 1)}>
            +
        </button>
        <h3>State : {count}</h3>
    </>
    );
}

export default API;