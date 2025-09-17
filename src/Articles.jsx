import articles from './data/articles.js';
import { useState } from "react"


import "./Articles.css"


// Je veux que, lorsque je click sur un article, son opacité diminue de 50%.
// Lorsque je reclick sur l'article l'opacité devient normale

function Articles() {
    const [opacity, setOpacity] = useState("1")
    const [favs, setFavs] = useState([])

    console.log(favs)

    // function changeOpacity(article, index) { 
    //     let newIndex = index + 1
    //     if (article.id == newIndex) {
    //         if (opacity == 1) {
    //             setOpacity("0.5")
    //         } else {
    //             setOpacity("1")
    //         }
    //     }   
    // }

    function addToFav(article) {
        setFavs(favs => [...favs, article])
    }

    return ( 
    <>
        <h2>Les listes en React</h2>

        {/* Je fais des listes en React avec la méthode .map */}
        { articles.map((article, index) => (
            <div 
                className='article' 
                key={article.id} 
                // onClick={() => changeOpacity(article, index)}
                style={{ opacity: opacity }}
                onClick={() => addToFav(article)}
            >
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <p>{article.date}</p>
            </div>
        )) }
    </>   
);
}

export default Articles;