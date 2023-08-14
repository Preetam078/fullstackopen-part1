import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import Total from "./components/Total/Total"

const App = () => {
  const course = 'Half Stack application development'
  const courseData = [
    {
      part:'Fundamentals of React',
      exercises:10,
    },
    {
      part:'Using props to pass data',
      exercises:7
    },
    {
      part:'State of a component',
      exercises:14
    }
  ]

  return (
    <>
      <Header header={course}/>
      <Content courseData={courseData}></Content>
      <Total exercises1 = {courseData[0].exercises} exercises2={courseData[1].exercises} exercises3={courseData[2].exercises}></Total>
    </>
  )
}

export default App