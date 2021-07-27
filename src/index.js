// import react and reactDOM libraries
import React from "react";
import ReactDom from "react-dom";

// create a react component
const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style="background-color: blue; color: white;">Submit</button>
    </div>
  );
};

// Take and show react component on screen
ReactDom.render(<App />, document.querySelector("#root"));
