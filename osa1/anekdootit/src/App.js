import './App.js';
import {useState} from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [points, setPoints] = useState([0,0,0,0,0,0,0])
  const [selected, setSelected] = useState(0)
  
  const vote = (index) => {
    const copy = [...points]
    let temp = copy[index]+1
    copy[index] = temp
    setPoints(copy)
  }

  return (
    <div>
      {anecdotes[selected]}<br/>
      Has {points[selected]} votes<br/>
      <button onClick={() => {vote(selected)}}>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))}>Next anecdote</button>
    </div>
  );
}

export default App;
