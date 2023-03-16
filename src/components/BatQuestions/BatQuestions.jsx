import React from 'react';
import './batQuestions.css'

function BatQuestions(){
    const batQandA = {
        "How long do bats live?": "Up to 30 years",
        "What are baby bats called?": "Pups",
        "What is a group of bats called?": "A colony",
        "How fast do bats fly?": "Up to 60mph"
    }

    // 2 If user has a bat question, display buttons with 4 bat questions and write function to answer the clicked question
function batQuestions() { 
    const results = document.getElementById('bat-results')
    results.innerHTML = ""
    
    Object.keys(batQandA).forEach((q) => {
        const button = document.createElement('button')
        button.innerText = q
        button.addEventListener('click', () => answerQuestions(q))
        results.appendChild(button)
    })
    const p = document.createElement('p')
    p.id = 'bat-qa'
    results.appendChild(p)
  }
  
  function answerQuestions(q) {
    const p = document.getElementById('bat-qa')
    p.innerText = batQandA[q]
  }
    
    return(
        <div>
            <h1 className='--batQuestions-title'>BatQuestions</h1>
        </div>
    )
}

export default BatQuestions;