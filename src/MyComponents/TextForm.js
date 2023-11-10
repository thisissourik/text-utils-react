import React, { useState } from "react";

export default function TextForm(props) {
  //Will be fired when uppercase button is clicked
  const convertToUppercase = () => {
    // console.log("Uppercase was cliked !");
    setText(text.toUpperCase());
  };

  //Will be fired when lowercase button is clicked
  const convertToLowercase = () => {
    // console.log("Lowercase was cliked !");
    setText(text.toLowerCase());
  };

  const onChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  //Resets the Text Area
  const resetField = (event) => {
    setText("");
  };
  //Generate Random Text
  const generateRandom = (event) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomWord = "";

    for (let i = 0; i < 100; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomWord += alphabet[randomIndex];
    }
    setText(randomWord);
  };
  
  const [text, setText] = useState("");
  var countW = text.split(" ").length;
  var countC = text.length;
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <form>
          <div>
            <input
              type="text"
              className="form-control"
              id="myBox"
              placeholder="Enter Text..."
              value={text}
              onChange={onChange}
            />
            <div>
              <button
                type="button"
                className="btn btn-outline-dark my-4"
                // onClick={convertToUppercase}
                onClick={convertToUppercase}
              >
                Convert to UPPERCASE
              </button>
              <button
                type="button"
                className="btn btn-outline-dark my-4 mx-4"
                onClick={convertToLowercase}
              >
                Convert to lowercase
              </button>
              <button
                type="button"
                className="btn btn-outline-dark my-4"
                onClick={resetField}
              >
                Reset Field
              </button>
              <button
                type="button"
                className="btn btn-outline-dark my-4 mx-4"
                onClick={generateRandom}
              >
                Generate Random Text
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="my-4 mx-0">
        <h2>Your Text Summary </h2>

        <p>
          {countW} Words and {countC} Characters
        </p>
        <p>Time to read : {0.008 * countW} seconds</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
