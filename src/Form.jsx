import { useState, useEffect } from "react";
import "./Form.css"

// Faire form avec email, pseudo, mot de passe, confirmation mot de passe et un bouton de soumission
// Je veux que toutes les infos renseignées par le user soit enregistrées dans un state 
// Une fois le form sopumis, afficher les infos en console

function Form() {
    // State pour les infos du formulaire, avant nettoyage
    const [formData, setFormData] = useState({
        name: "",
        email : "",
        password : "",
        confirm: ""
    })
    const [formFinal, setFormFinal] = useState(null)
    const [error, setError] = useState("")
    
    // Regex qui permet de vérifier si l'email est au bon format
    const regexEmail = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')
    const regexName = new RegExp('^[a-z0-9_-]{3,15}$')
    const regexPassword = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$')

    // Ici on envoit les infos finales du formulaire vers l'API en vue d'enregistrer les infos du user
    useEffect(() => {

        axios.post("http://localhost:3000/user/signup", formFinal)
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }, [formFinal])

    // Fonction de vérification et nettoyage des infos 
    function checkFormData() {
        // On vient nettoyer / vérifier les infos du Form (mdp = confirmation, que le mail est bien un mail)

        // Username 
        // Limiter le nbre de caractères (max 20 par exemple)
        // Echapper certains caractères spéciaux potentiellement problématiques : @,;,",', `, les <>
        if (regexName.test(formData.name)) {
            if (regexPassword.test(formData.password)) {
                if (formData.password === formData.confirm) {
                    if (regexEmail.test(formData.email)) {

                        /// METTRE A JOUR LE STATE POUR formFinal
                        let finalForm = {
                            name: formData.name,
                            email: formData.email,
                            password: formData.password
                        }

                        setFormFinal(finalForm)

                    } else {
                        setError("Le format de l'email n'est pas bon ")
                    }
                } else {
                    setError("Les passwords sont différents")
                }
            }
            else {
                setError("Le password n'est pas au bon format")
            }
        } else {
            setError("Seulement des minuscules, chiffre et -, _ sont autorisé pour le username")
        }
    }

    // console.log("formData : " + formData)
    // console.log(regexEmail.test(formData.email))
    console.log("formFinal : " + formFinal)

    return ( 
    <div className="signupForm">
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

        <input 
            type="password" 
            placeholder="Confirmer le password"
            name="confirm"
            value={formData.confirm}
            onChange={(e) => setFormData({ ... formData, confirm : e.target.value })}
        />

        <button onClick={() => checkFormData()}>Envoyer Form</button>

        { error ? <h3 className="error">{error}</h3> : null }

    </div>
    );
}

export default Form;