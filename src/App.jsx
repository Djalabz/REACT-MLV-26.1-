// J'importe le CSS pour App
import './App.css'

// J'importe le composant Car afin de l'afficher dans mon App
import Car from "./Car.jsx"
import Home from "./Home.jsx"
import Counter from "./Counter.jsx"
import Articles from "./Articles.jsx"
import NoPage from "./NoPage.jsx"
import API from "./API.jsx"

// React Router 
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Mon composant App qui contiendra les différentes parties de l'application 
function App() {

  return (
    <>
        {/* MENU DE NAVIGATION  */}

        <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/articles">Articles</Link> |{" "}
          <Link to="/api">API</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/counter" element={<Counter />}/>
          <Route path="*" element={<NoPage />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
