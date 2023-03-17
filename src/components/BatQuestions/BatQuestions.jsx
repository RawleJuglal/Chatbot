import React, {useState} from 'react';
import './BatQuestions.css'
import { nanoid } from 'nanoid'
import 'animate.css';

function BatQuestions(){
    const [answer, setAnswer] = useState('')
    const batQandA = [
        ["How long do bats live?","Up to 30 years"],
        ["What are baby bats called?","Pups"],
        ["What is a group of bats called?","A colony"],
        ["How fast do bats fly?","Up to 60mph"]
    ]

    let batQuestions = batQandA.map((pair, index, array) => {
        return <button key={nanoid()} id={index} className="--batQuestions-btn btn" onClick={(event)=>answerQuestion(event)}>{pair[0]}</button>
    })

    function answerQuestion(e){       
        if(document.getElementById('bat-qa')){
            document.getElementById('bat-qa').classList.remove('animate__animated', 'animate__backInRight')
            setTimeout(()=>{
                setAnswer(batQandA[e.target.id][1])
                document.getElementById('bat-qa').classList.add('animate__animated', 'animate__backInRight')
            },200)
        } else {
            setAnswer(batQandA[e.target.id][1])
        }
    }
    
    return(
        <div id="batQuestion-component">
            {batQuestions}
            {answer && <p id="bat-qa" className='--bat-qa animate__animated animate__backInRight'>{answer}</p>}
        </div>
    )
}

export default BatQuestions;