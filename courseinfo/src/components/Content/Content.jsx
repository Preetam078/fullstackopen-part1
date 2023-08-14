import React from 'react'
import Part from './Part';

const Content = (props) => {
  const {courseData} = props;
  return (
    <>
    <Part part={courseData[0].part} exercise={courseData[0].exercises}></Part>
    <Part part={courseData[1].part} exercise={courseData[1].exercises}></Part>
    <Part part={courseData[2].part} exercise={courseData[2].exercises}></Part>
    </>
  )
}

export default Content