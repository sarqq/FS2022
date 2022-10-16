import './App.js';
import {useState} from 'react'

const Statistics = (props) => {
  return (
    <div>
      {props.name}: {props.type}
    </div>
  )
}

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
        <h2>Statistics!</h2>
        <Statistics name="good" type={good}/>
        <Statistics name="neutral" type={good}/>
        <Statistics name="bad" type={good}/>
        <Statistics name="all" type={good+neutral+bad}/>
        <Statistics name="feedback average" type={(good*1)+(bad*-1)/(good+neutral+bad)}/>
        <Statistics name="percentage of positive feedback" type={[(good/(good+neutral+bad))*100, '%']}/>
      </p>
    </div>
  )
}

export default App;
