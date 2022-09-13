import logo from './logo.svg';
import './App.css';

function App() {
  
  const App = () => {
    const course = 'Full Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
      <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
    )
  }
  const Content = (Fullstack) => {
    return (
      <div>
        <Part one/>
        <Part two/>
        <Part three/>
      </div>
    )
  }
  
  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }
  
}

export default App;
