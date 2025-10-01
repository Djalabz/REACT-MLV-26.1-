import { useState, useEffect } from "react"

function Pokedex() {
    const [pokemons, setPokemons] = useState(null)

    // Notre useEffect pour le call API
    useEffect(
        () => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(data => data.json())
            .then(api => {
                console.log(api.results)
                setPokemons(api.results)
            })
            .catch(error => console.log(error))
        }, []
    )

    return ( 
    <>
        <h2>Pokedex en React</h2>

        {/* On vient maper sur notre tableau d'objets Pokemons  */}
        { pokemons && pokemons.map((pokemon, index) => (
            <div key={index}>
                <h3>{pokemon.name}</h3>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + (index + 1) + ".png"} />
            </div>
        )) }
    </>
     );
}

export default Pokedex;
