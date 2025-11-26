// J'importe le CSS pour App
import './App.css'

// J'importe le composant Car afin de l'afficher dans mon App
import Car from "./Car.jsx"
import Home from "./Home.jsx"
import Counter from "./Counter.jsx"
import Articles from "./Articles.jsx"
import NoPage from "./NoPage.jsx"
import API from "./API.jsx"
import Pokedex from "./Pokedex.jsx"
import Blog from "./Blog.jsx"
import Quiz from './Quiz.jsx'
import Login from './Login.jsx'
import Form from './Form.jsx'

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
          <Link to="/api">API</Link> |{" "}
          <Link to="/pokedex">Pokedex</Link> |{" "}
          <Link to="/blog">Blog</Link> |{" "}
          <Link to="/quiz">Quiz</Link> |{" "}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/counter" element={<Counter />}/>
          <Route path="*" element={<NoPage />} />
          <Route path="/api" element={<API />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
