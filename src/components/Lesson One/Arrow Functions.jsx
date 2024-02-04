// Arrow Functions
// Arrow functions allow us to write shorter function syntax:

// Example

hello = function () {
  return "Hello World!";
};

// With Arrow Function:
hello = () => {
  return "Hello World!";
};

// It get shorter! If the Function has only one statement, and the statment returns a value, you can remove the brackets and the return keyword:

// Example
// Arrow Functions Return Value by Default:
hello = () => "Hello world";

//Note: This works only if the function has only one statement.

// If you have parameters, you pass them inside the parentheses:

// Arrow Function With Parameters:
hello = (val) => "hello" + val;

// In fact, if you have only one parameter, you can skip the parentheses as well:

// Arrow Function Without Parentheses:

hello = (val) => "hello" + val;
