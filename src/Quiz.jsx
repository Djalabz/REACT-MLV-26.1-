// PAGE DU QUIZ !

// Vous devez à partir de quiz.js générer un petit QCM :

// Pour chaque élément de quiz vous afficherez : 
// - La question 
// - Les choix possibles de réponses 
// - La réponse est validée lorsque l'on clique sur celle-ci  
// - Vous devrez ensuite vérifier que la réponse choisie soit bien la bonne (regarder dans quiz.js)
// - Une fois toutes les questions répondues le jeu s'arrete et un bouton permet de recommencer 

// BONUS : affichage du score 


// Concepts à utiliser : 

// useState (le numéro de la question, le score ...)
// Le rendu conditionnel (if .. else => ? :)
// Ecouteur d'événement avec onClick (lorsque l'on clique sur une des réponses)
// méthode .map pour afficher les différents choix possibles


// Indices : 

// Un state pourra s'occuper de l'index de la question (index à 1 au départ pour la première question 
// puis lorsque l'on répond on incrémente celui-ci)
// Un state sera aussi très utile pour le score (à chaque bonne réponse on incrémente ce state de 1)
// If ... else à utiliser aussi dans le JSX (ex: si le state de l'index arrive à la fin on affiche 
// un bouton recommencer et le score sinon on affiche les questions)


// Comment utiliser l'index:

// Pour récupérer une question avec un certain index : quiz[index].question
// Pareil pour les choix : quiz[index].choices

import { useState } from "react"
import quiz from "./data/quiz"

function Quiz() {

    // Nos states 
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)

    // Nos fonctions 
    // On gère le click en augmentant score et questionIndex
    function handleClick(choice) {
        if (choice === quiz[questionIndex].correctAnswer) {
            setScore(score + 1)
        } 

        setQuestionIndex(questionIndex + 1)
    } 

    // On gère le reset et on remet les states à leur valeur de départ
    function handleReset() {
        setQuestionIndex(0)
        setScore(0)
    }
    

    return ( 
    
        <>
            <h2>Le Quiz du jour</h2>

            { questionIndex < quiz.length ? <h3>Round : {questionIndex + 1} / 5</h3> : <h3>Round : 5 / 5</h3>}
            
            <h3>Score : {score} / 5</h3>


            { questionIndex < quiz.length ?
                <>
                    <h4>{quiz[questionIndex].question}</h4>
            
                    {quiz[questionIndex].choices.map((choice, index) => (
                            <button onClick={() => handleClick(choice)} key={index}>{choice}</button>
                    ))}
                </>
                
                :
            
                <button onClick={() => handleReset()}>Recommencer</button>
            }

        </> 
        
    );
}

export default Quiz;