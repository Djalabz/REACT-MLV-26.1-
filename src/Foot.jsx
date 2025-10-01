import {useState, useEffect} from "react"

// API Football => Il faut vous enregistrer et recup dans votre profil la clé API

let apiKey = "085a3dfba7411f2a687e9499320d510e"

// Objectifs : 

// - Afficher les stats des joueurs pour une league : du meilleur buteur au moins bon
// - Pour chaque joueur : une photo ainsi que l'écusson de leur équipe 

function Foot() {
    
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", apiKey);
        myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://v3.football.api-sports.io/leagues", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }, [])

    return ( 
    <>
        <h2>API de foot</h2>
    </> 
    );
}

export default Foot;