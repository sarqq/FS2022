import './App.js';
import {useState} from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("Positive feedback")
    setGood(good+1)
  }
  const handleNeutral = () => {
    console.log("Neutral feedback")
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    console.log("Negative feedback")
    setBad(bad+1)
  }

  return(
    <div>
      <h1>Give feedback! :^)</h1>
      <button onClick={handleGood}>Good :)</button>
      <button onClick={handleNeutral}>Neutral :I</button>
      <button onClick={handleBad}>Bad :(</button>
      <p>
        Statistics!
        <br/>
        good: {good}
        <br/>
        neutral: {neutral}
        <br/>
        bad: {bad}
      </p>
    </div>
  )
}

export default App;
