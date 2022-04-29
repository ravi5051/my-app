import React from 'react'
import './App.css'

export default function Heading(props) {
  return (
    <div className="container">
  <h1 className="heading center">{props.heading}</h1>
  </div>
  )
}
Heading.defaultProps={
    heading:'Title'
}
