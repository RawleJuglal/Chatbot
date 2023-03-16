import React,{useState, useEffect} from 'react'
import './App.css'
import BatPic from './components/BatPic/BatPic';
import BatQuestions from './components/BatQuestions/BatQuestions'
import BatAnimate from './components/BatAnimate/BatAnimate'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [firstAnswer,setFirstAnswer] = useState('');
  
  useEffect(()=>{
    setIsLoading(true)

    
  },[firstAnswer])
  
  function processFirstQuestion(event) {
    event.preventDefault()
    const helpSelect = document.getElementById("help-select")    
    setFirstAnswer(helpSelect.value)
    const batResponse = document.getElementById("bat-response")    
    
    if (firstAnswer == "pic") {
        batResponse.classList.remove('fly')
        batResponse.textContent = "Right on, bat pic coming up! 🦇"
    } else if (firstAnswer == "question") {
        batResponse.classList.remove('fly')
        batResponse.textContent = "Fire away! 🦇"
        // batQuestions()
    } else if (firstAnswer == "animate") {
        batResponse.textContent = "🦇 🦇 🦇 🦇 🦇 🦇 🦇 🦇"
        batResponse.classList.add('fly')
    }
  }

  function handleChange(event){
    setFirstAnswer(event.target.value)
  }

  return (
    <div className="App">
      <h1 className="title">Chat Bat 🦇</h1>
        
        <form className="flex">
            <label htmlFor="cars">What can Chat Bat help you with today?</label>
            <select name="cars" id="help-select" onChange={(e)=> handleChange(e)}>
                <option value="animate">🦇</option>
                <option value="pic">📸 See a bat pic</option>
                <option value="question">❓ I have a bat question</option>
            </select>
            <input id="submit" type="submit" value="Submit" onClick={(e) => processFirstQuestion(e)}/>
        </form>
        
        <p id="bat-response">... 🦇</p>
        {/* <div id="bat-results"></div> */}
        {firstAnswer == "pic" && <BatPic />}
        {firstAnswer == "question" && <BatQuestions />}
        {firstAnswer == "animate" && <BatAnimate />}
    </div>
  )
}

export default App
