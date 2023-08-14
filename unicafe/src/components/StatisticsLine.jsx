import React from 'react'

const StatisticsLine = ({value, label}) => {
  return (
    <div>
        <h3>{label} = {value}</h3>
    </div>
  )
}

export default StatisticsLine