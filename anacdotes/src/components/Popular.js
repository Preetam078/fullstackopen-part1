import React from 'react'

const Popular = ({maxVote, maxSelected}) => {
  return (
    <div>
        {(maxVote === 0)?<><h2>No one voted yet !</h2></>:
        <>
        <h2>Most Voted Anecdotes</h2>
        <h3>{maxSelected}</h3>
        <h3>{maxVote}</h3>
        </>}
    </div>
  )
}

export default Popular