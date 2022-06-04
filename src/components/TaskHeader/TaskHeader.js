import React from 'react'
import Button from './../Button/Button.js'

const TaskHeader = (props) => {
  const onClick = () => (
    console.log('Button is clicked')
  )
  return (
    <header>
      <h1>{props.title}</h1>
      <Button
        onClick={onClick}
      />
    </header>
  )
}

TaskHeader.defaultProps = {
  title: 'Task Tracker'
}

export default TaskHeader
