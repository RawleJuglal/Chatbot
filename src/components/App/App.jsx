import React,{useState, useEffect} from 'react'
import './App.css'
import BatAnimate from '../BatAnimate/BatAnimate'
import BatPic from '../BatPic/BatPic'
import BatQuestions from '../BatQuestions/BatQuestions'

function App() {
  const [selection, setSelection] = useState('')
  const [viewable, setViewable] = useState('')
  useEffect(()=>{
    
  },[])

  function handleChange(e){
    setSelection(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    setViewable(selection)
  }

  return (
    <div id="app-container" className="--app-app-container">
      <h1 id="app-title" className='--app-title'>Chat Bat 🦇</h1>
      <form id="app-bat-form" onSubmit={(event)=> handleSubmit(event)}>
        <label htmlFor="bats-chatbot">What can Chat Bat help you with today?</label>
        <select id="bat-select" value={selection} onChange={(event)=>handleChange(event)} name="bats-chatbot">
          <option value={''}></option>
          <option value="animate">🦇 animate</option>
          <option value="pic">📸 See a bat pic</option>
          <option value="question">❓ I have a bat question</option>  
        </select>
        <input id="submit-btn" type="submit" value="Submit" />
      </form>
      <p id="bat-response">{viewable == 'pic'? 'Right on, bat pic coming up! 🦇': viewable == 'question'? 'Fire away! 🦇': viewable == 'animate'? '':'... 🦇' }</p>
      {viewable == 'animate' && <BatAnimate />}
      {viewable == 'pic' && <BatPic />}
      {viewable == 'question' && <BatQuestions />}
    </div>
  )
}

export default App
