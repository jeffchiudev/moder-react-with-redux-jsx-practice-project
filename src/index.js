// import react and reactDOM libraries
import React from "react";
import ReactDom from "react-dom";

// create a react component
const App = () => {
  const buttonText = "Click me";
  const labelText = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take and show react component on screen
ReactDom.render(<App />, document.querySelector("#root"));
