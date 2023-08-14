import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good)
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
      <button onClick={()=>setGood(good+1)}>Good</button>
      <button onClick={()=>setNeutral(neutral+1)} style={{margin:"10px"}}>Neutral</button>
      <button onClick={()=>setBad(bad+1)}>Bad</button>
      </div>

      <div>
        <h3>
          Good votes = {good}
        </h3>
        <h3>
          Neutral votes = {neutral}
        </h3>
        <h3>
          Bad votes = {bad}
        </h3>
      </div>
    </div>
  )
}

export default App