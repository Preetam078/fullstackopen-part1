import { useState } from 'react'
import Popular from './components/Popular';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let  initial_points = new Array(anecdotes.length) 
  initial_points.fill(0);
   
  const [selected, setSelected] = useState(0)
  const [point, setPoint] = useState(initial_points)
  const [maxVote, setMaxVote] = useState(0)
  const [maxSelected, setMaxSelected] = useState("");

  const handleMaxVote = () => {
    let maxi = 0;
    for(let i = 0; i < point.length; i++) {
       if(point[i] > maxi) {
        setMaxVote(point[i]);
        setMaxSelected(anecdotes[i]);
       }
    }
  }

  const handleClick = () => {
    const len = anecdotes.length;
    let curr = Math.floor(Math.random()*len);
    setSelected(curr)
  }
  const handleVotes = async() => {
    const copy = [...point];
    copy[selected] += 1;
    await setPoint(copy)

    handleMaxVote();
  }

  return (
    <>
    <div>
      {anecdotes[selected]}
    </div>
    <div>
      has {point[selected]} votes.
    </div>
    <div>
      <button onClick={handleClick}>Next Anacdotes</button>
    </div>
    <div>
      <button onClick={handleVotes}>vote</button>
    </div>
    <Popular maxVote={maxVote} maxSelected={maxSelected}></Popular>
    </>
  )
}

export default App