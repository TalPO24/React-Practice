// Styling React Using CSS

// There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:
// - Inline stling
// - CSS stylesheets
// - CSS Modules

// Inline  Styling
// To style element with the inline style attribute, the value must be JavaScript object:
// Example
// Insert an object with the styling informations:
const Header = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};

// NOTE: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

// camelCased Property Names
// Since the inline CSS is written in JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:

// Example:
// Use backgroundColor instead of background-color:

const Header = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};

// JavaScript Object
// You can also create an object with styling information, and refer to it in the style attribute:

// Example:
// Create a style object named myStyle:

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};
