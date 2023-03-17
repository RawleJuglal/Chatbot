import React, {useState} from 'react';
import './batQuestions.css'
import { nanoid } from 'nanoid'

function BatQuestions(){
    const [answer, setAnswer] = useState('')
    const batQandA = [
        ["How long do bats live?","Up to 30 years"],
        ["What are baby bats called?","Pups"],
        ["What is a group of bats called?","A colony"],
        ["How fast do bats fly?","Up to 60mph"]
    ]

    let batQuestions = batQandA.map((pair, index, array) => {
        return <button key={nanoid()} id={index} onClick={(event)=>answerQuestion(event)}>{pair[0]}</button>
    })

    function answerQuestion(e){
        setAnswer(batQandA[e.target.id][1]) 
    }
    
    return(
        <div id="batQuestion-component">
            {batQuestions}
            {answer && <p id="bat-qa">{answer}</p>}
        </div>
    )
}

export default BatQuestions;