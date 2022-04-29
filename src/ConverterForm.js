import React, { useState } from 'react'
export default function ConverterForm(props) {
    const [text, setText] = useState('')
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clear = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const [myStyle, setMyStyle] = useState({
        color: "rgb(46, 42, 42)",
        backgroundColor: "white"
    })
    const toggleBackground = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            })
            setBtnText("Enable Dark Mode")
        }
        else {
            setMyStyle({
                color: "white",
                backgroundColor: "rgb(46, 42, 42)"
            })
            setBtnText("Enable Light Mode")
        }
    }
    return (
        <>
            <div className="container" style={myStyle}>
                <div className="form" >
                    <textarea name="converter" id="converter" value={text} placeholder='Enter your text here...' onChange={handleOnChange} cols="100" rows="10" style={myStyle}></textarea>
                    <div className="buttons">
                        <button className="btn" onClick={toUpperCase}>Convert it to Upper Case</button>
                        <button className="btn" onClick={toLowerCase}>Convert it to Lower Case</button>
                        <button className="btn" onClick={clear}>Clear Text</button>
                        <button className="btn" onClick={toggleBackground}>{btnText}</button>
                    </div>
                    <h1>Text Summery</h1>
                    <p style={myStyle}>{text.split(" ").length - 1} words and {text.length} characters.</p>
                    <p style={myStyle}>This can be read in {0.48 * text.split(" ").length} seconds.</p>
                    <h1>Preview</h1>
                    <p style={myStyle}>{text}</p>
                   
                </div>
            </div>
        </>
    )
}

