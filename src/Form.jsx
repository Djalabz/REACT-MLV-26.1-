import { useState } from "react";

// Faire form avec email, pseudo, mot de passe, confirmation mot de passe et un bouton de soumission
// Je veux que toutes les infos renseignées par le user soit enregistrées dans un state 
// Une fois le form sopumis, afficher les infos en console

function Form() {
    // State pour les infos du formulaire, avant nettoyage
    const [formData, setFormData] = useState({
        name: "",
        email : "",
        password : ""
    })
    
    // Regex qui permet de vérifier si l'email est au bon format
    const regexEmail = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')

    // Ici on envoit les infos finales du formulaire vers l'API
    // useEffect(() => {
    //     axios.post("http://localhost:3000/signup")
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    // }, [formFinal])

    function checkFormData() {
        // On vient nettoyer / vérifier les infos du Form (mdp = confirmation, que le mail est bien un mail)

        // On viendrait ensuite enregistrer un nouveau state qui pourrait etre formFinal 
    }

    console.log(formData)
    console.log(regexEmail.test(formData.email))

    return ( 
    <>
        <h2>Formulaire de Signup</h2>

        <input 
            type="email" 
            placeholder="Votre email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ... formData, email : e.target.value })}
        />

        <input 
            type="text" 
            placeholder="Votre name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ... formData, name : e.target.value })}
        />

        <input 
            type="password" 
            placeholder="Votre password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ... formData, password : e.target.value })}
        />

        <button onClick={() => checkFormData()}>Envoyer Form</button>
    </>
    );
}

export default Form;