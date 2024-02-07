// React Hooks

// Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

// Although Hooks generally replace class components, there are no plans to remove classes from React.

// What is a Hook?
// Hooks allow us to "Hook" into React features such as state and lifecycle methods.

// Here is an example of a Hook
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");
}

return (
  <>
    <h1>my favorite color is {color}!</h1>
    <button type="button" onClick={() => setColor("blue")}>
      Blue
    </button>
    <button type="button" onClick={() => setColor("red")}>
      red
    </button>
    <button type="button" onClick={() => setColor("green")}>
      green
    </button>
    <button type="button" onClick={() => setColor("pink")}>
      pink
    </button>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor />);

// You must import Hooks from react.

// Here we are using the useState Hook to keep track of the application state.

// State generally refers to application data or properties that need to be tracked

// Hook Rules
// There are 3 rules for hooks:
//* Hooks can only be called inside React function components.
//* Hooks can only be called at the top level of a component.
//* Hooks cannot be conditional.

// NOTE: Hooks will not work in react class components.

// Custom Hooks
// If you have stataful logic that needs to be reused in several components, you can build your own custom Hooks.
