import React, { useState } from 'react'
import './App.css'

export default function Navbar(props) {
  const [switchText, setSwitchText] = useState('Enable Dark Mode');
  const [myStyle, setMyStyle] = useState({
    color: "rgb(46, 42, 42)",
    backgroundColor: "white",
    setswitchText: "Enable Light Mode"
  });
  const toggleBackground = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      })
      setSwitchText("Enable Dark Mode")
    }
    else {
      setMyStyle({
        color: "white",
        backgroundColor: "rgb(46, 42, 42)"
      })
      setSwitchText("Enable Light Mode")
    }
  }
  return (
    <>
      <nav className="navbar" style={myStyle}>
        <div className="left">
          <li><a href="#" style={myStyle}>{props.title}</a></li>
          <li><a href="#" style={myStyle}>Home</a></li>
          <li><a href="#" style={myStyle}>About</a></li>
          <li><a href="#" style={myStyle}>E-content</a></li>
          <li><a href="#" style={myStyle}>Downloads</a></li>
        </div>
        <div className="right">
          <p style={myStyle}>{switchText}</p>

          <div className="box">
            <label className="switch">
              <input type="checkbox" name="switch" onClick={toggleBackground} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.defaultProps = {
  title: 'Title'
}