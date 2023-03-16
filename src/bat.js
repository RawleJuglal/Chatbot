document.getElementById("submit").addEventListener("click", processFirstQuestion)
// Bat Q&A
const batQandA = {
    "How long do bats live?": "Up to 30 years",
    "What are baby bats called?": "Pups",
    "What is a group of bats called?": "A colony",
    "How fast do bats fly?": "Up to 60mph"
}

function processFirstQuestion() {
    event.preventDefault()
    const helpSelect = document.getElementById("help-select")    
    const firstAnswer = helpSelect.value
    const batResponse = document.getElementById("bat-response")    
    
    if (firstAnswer == "pic") {
        batResponse.classList.remove('fly')
        batResponse.textContent = "Right on, bat pic coming up! 🦇"
        showPic()
    } else if (firstAnswer == "question") {
        batResponse.classList.remove('fly')
        batResponse.textContent = "Fire away! 🦇"
        batQuestions()
    } else {
         batResponse.textContent = "🦇 🦇 🦇 🦇 🦇 🦇 🦇 🦇"
         batResponse.classList.add('fly')
    }
}

// Todos

// 1.  Write the showPic function - wait one second, then show a random bat pic
function showPic() {
    const batResponse = document.getElementById("bat-response")
    
    setTimeout(function(){ 
        const results = document.getElementById('bat-results')
        results.innerHTML = ""
        
        const randInt = Math.floor(Math.random() * 6);
        batResponse.textContent = 'tada 🎉';
        const img = document.createElement('img')
        img.src = `./pics/bat${randInt}.JPG`
        img.alt = 'bat pic'
        results.appendChild(img)
    }, 200);
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

// 3. If the user selects the bat option, make the bats move across the screen.


