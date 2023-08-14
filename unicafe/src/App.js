import { useState } from 'react'
import Buttons from './components/Buttons';
import StatisticsLine from './components/StatisticsLine';
const Statistics = (props) => {
  const {good, neutral, bad, average, positive} = props;
  return (
    <div>
      <StatisticsLine value={good} label="good"></StatisticsLine>
      <StatisticsLine value={neutral} label="neutral"></StatisticsLine>
      <StatisticsLine value={bad} label="bad"></StatisticsLine>
      {
        (good === 0 && neutral === 0 && bad === 0)?<h2>No Feedback yet</h2>:
        <>
          <h3>average = {average}</h3>
          <h3>positive = {positive}</h3>
        </>
      }
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = (good-bad)/(good + bad + neutral)*100;
  const positive = (good)/(good + bad + neutral)*100;
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
      <Buttons handleClick={setGood} value={good} label="Good"></Buttons>
      <Buttons handleClick={setNeutral} value={neutral} label="Neutral"></Buttons>
      <Buttons handleClick={setBad} value={bad} label="Bad"></Buttons>
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}></Statistics>
      </div>
    </div>
  )
}

export default App