import './App.js';
import {useState} from 'react'

const Statistics = (props) => {
  if(props.type[0]>0 || props.type[1]>0 || props.type[2]>0){
    return(
      <div>
        {props.name[0]}: {props.type[0]}<br/>
        {props.name[1]}: {props.type[1]}<br/>
        {props.name[2]}: {props.type[2]}<br/>
        {props.name[3]}: {props.type[3]}<br/>
        {props.name[4]}: {props.type[4]}<br/>
        {props.name[5]}: {props.type[5]}<br/>
      </div>
    )
  }
  return (
    <div>
      No feedback given
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
        <Statistics name={["good", "neutral", "bad", "all", "feedback average", "percentage of positive feedback"]}
         type={[good, neutral, bad, (good+neutral+bad), ((good*1)+(bad*-1)/(good+neutral+bad)), [(good/(good+neutral+bad))*100, '%']]}/>
      </p>
    </div>
  )
}

export default App;
