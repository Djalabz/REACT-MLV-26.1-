import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function Login() {
    const [formData, setFormData] = useState({
        email : "",
        password : "",
    })
    const [formFinal, setFormFinal] = useState(null)
    const [error, setError] = useState("")

    // Ici on envoit les infos finales du formulaire vers l'API en vue d'enregistrer les infos du user
    useEffect(() => {

        axios.post("http://localhost:3000/user/login", formFinal)
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }, [formFinal])

    function checkFormData() {
        setFormFinal(formData)
    }

    return ( 

        <div className="loginForm">

            <h2>Login first !</h2>

            <input 
                type="email" 
                placeholder="Votre email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ... formData, email : e.target.value })}
            />

            <input 
                type="password" 
                placeholder="Votre password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ... formData, password : e.target.value })}
            />

            <button onClick={() => checkFormData()}>Envoyer</button>

            { error ? <h3 className="error">{error}</h3> : null }

            <p>Pas encore inscrit ? <Link to="/signup">Signup ici</Link></p>

        </div>
    );
}

export default Login;