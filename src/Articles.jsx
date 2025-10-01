import articles from './data/articles.js';
import { useState } from "react"


import "./Articles.css"


function Articles() {
    const [blurArticle, setBlurArticle] = useState(null)

    function toggleOpacity(id) {
        setBlurArticle(id)
    }

    return ( 

    <>
        <h2>Les listes en React</h2>

        {/* Je fais des listes en React avec la méthode .map */}
        { articles.map((article) => (
            <div 
                className='article' 
                key={article.id} 
                // onClick={() => addToFav(article)}
                onClick={() => toggleOpacity(article.id)}
                style={{ opacity: blurArticle == article.id ? "50%" : "100%" }}
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


// const [blurArticle, setBlurArticle] = useState(null);


// function toggleOpacity(articleId) {
//     setBlurArticle(prev => (prev === articleId ? null : articleId));
// }

// onClick={() => toggleOpacity(article.id)}
// style={{ opacity: blurArticle === article.id ? "50%" : "100%" }}