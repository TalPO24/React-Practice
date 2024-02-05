// React Render HTML

// React's goal is in many ways to render HTML in a web page.
// React renders HTML to the web page by using a function called createRoot() and it's method render().

// The createRoot Function

// The createRoot() function takes one argument, an HTML element.
// The purpose of the function is to define the HTML element where a React component should be displayed.

// The render Method

// The render() method is then called to define the React component that should be rendered.
// But render where?
// There is another folder in the root directory of your project, named "public". in this folder, there is an index.html file.
// You'll notice a single <div> in the body of this file. This is where our React application will be rendered.

//Example
// Display a paragraph isnside an element with the id of "root":
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);
// The result is displayed in the <div id="root"> element:
<body>
  <div id="root"></div>
</body>;

// Note that the element id does not have to be called "root", but this is the standard convention.

// The HTML Code

// The HTML code in this tutorial uses JSX which allows you to write HTML tags inside JavaScript code:
// Example
// Create a variable that contains HTML code and display it in the root node:
const myelement = (
  <table>
    <tr>
      <th>name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const container = document.getElementById(root);
const root = ReactDOM.createRoot(container);
root.render(myelement);

// The Root Node

// The root node is the HTML element where you want to display the result.
// It is like a container for content managed by React.
// It does NOT have to be a <div> element and it does NOT have to have the id='root':
// Example
// The root node can be called whatever you like:
<body>
  <header id="sandy"></header>
</body>;

// Display the result in the <header id="sandy"> element:

const container = document.getElementById("sandy");
const root = ReactDOM.createRoot(container);
root.render(<p>Hallo</p>);
