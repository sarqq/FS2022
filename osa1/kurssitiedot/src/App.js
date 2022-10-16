import './App.js';

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.param1} exercises={props.param2}/>
      <Part part={props.param3} exercises={props.param4}/>
      <Part part={props.param5} exercises={props.param6}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.a}+{props.b}+{props.c}</p>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3  = 14

  return (
    <>
      <Header course={course}/>
      <Content param1={part1} param2={exercises1} param3={part2} param4={exercises2} param5={part3} param6={exercises3}/>
      <Total a={exercises1} b={exercises2} c={exercises3}/>
    </>
  );
}

export default App;
