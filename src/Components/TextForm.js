import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLOClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    const textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  }
  const handleRES = () => {
    const newText = text.replace(/\s+/g, ' '); // Replace multiple spaces with a single space
    setText(newText);
  };
  return (
    <>
      <div>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
              Enter Text Below
            </label>
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="5"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLOClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleRES}>
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
