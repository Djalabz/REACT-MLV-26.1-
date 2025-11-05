import { useState, useEffect } from "react"

function API() {
    const [input, setInput] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({ message : message })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, [message])

    return ( 
    <>
        <h2>Première requete vers une API</h2>

        <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="votre message ici"
        />

        <button onClick={() => setMessage(input)}>Envoyer message</button>

    </>
    )
}

export default API;