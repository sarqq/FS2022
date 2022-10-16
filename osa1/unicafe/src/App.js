import './App.js';
import {useState} from 'react'

const Statistics = (props) => {
  const StatisticLine = ({text, value}) => <p>{text}: {value}</p>
  
  //checks if any feedback given
  if(props.type[0]>0 || props.type[1]>0 || props.type[2]>0){
    return(
      <div>
        <StatisticLine text={props.name[0]} value={props.type[0]}/>
        <StatisticLine text={props.name[1]} value={props.type[1]}/>
        <StatisticLine text={props.name[2]} value={props.type[2]}/>
        <StatisticLine text={props.name[3]} value={props.type[3]}/>
        <StatisticLine text={props.name[4]} value={props.type[4]}/>
        <StatisticLine text={props.name[5]} value={props.type[5]}/>
      </div>
    )
  }
  return (
    <div>
      No feedback given
    </div>
  )
}

const Button = (props) => {
  if(props.name==="good"){
    return (
      <button onClick={props.handler}>
        Good :)
      </button>
    )
  }
  else if(props.name==="bad"){
    return (
      <button onClick={props.handler}>
        Bad :(
      </button>
    )
  }
  else{
    return (
      <button onClick={props.handler}>
        Neutral :I
      </button>
    )
  }
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
      <Button name="good" handler={handleGood}/>
      <Button name="neutral" handler={handleNeutral}/>
      <Button name="bad" handler={handleBad}/>
      <p>
        Statistics!<br/>
        <Statistics name={["good", "neutral", "bad", "all", "feedback average", "percentage of positive feedback"]}
         type={[good, neutral, bad, (good+neutral+bad), ((good-bad)/(good+neutral+bad)), [(good/(good+neutral+bad))*100, '%']]}/>
      </p>
    </div>
  )
}

export default App;
