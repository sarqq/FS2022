import './App.js';
import {useState} from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    console.log("Positive feedback", good)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    console.log("Neutral feedback", neutral)
  }
  const handleBad = () => {
    setBad(bad+1)
    console.log("Negative feedback", bad)
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
        <br/>
        all: {good+neutral+bad}
        <br/>
        feedback average: {(good*1)+(bad*-1)/(good+neutral+bad)}
        <br/>
        percentage of positive feedback: {(good/(good+neutral+bad))*100} %
      </p>
    </div>
  )
}

export default App;
