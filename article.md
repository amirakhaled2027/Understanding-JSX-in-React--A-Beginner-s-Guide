
https://medium.com/@amirakhaled2027/understanding-jsx-in-react-a-beginners-guide-6551a2772d01

Understanding JSX in React: A Beginner’s Guide

Introduction:
React is a powerful JavaScript library for building user interfaces, and one of its defining features is JSX. In this article, we’ll explore JSX and learn how it simplifies the process of creating dynamic UI components in React. Whether you’re new to React or looking to gain a deeper understanding of JSX, this beginner-friendly guide will get you started.

What is JSX?
JSX stands for JavaScript XML. It’s a syntax extension that allows you to write HTML-like code within your JavaScript files. JSX is not mandatory to use with React, but it provides a more intuitive and expressive way to describe the structure and appearance of your components.

Why Use JSX?
JSX combines the power of JavaScript and HTML-like syntax, making it easier to visualize and reason about your UI components. It allows you to seamlessly incorporate dynamic data and logic into your views, improving code readability and maintainability.

1. JSX Syntax
Let’s dive into the basic syntax of JSX:

Embedding Expressions:
In the example above, I embed the JavaScript expression {name} within the JSX tags. The value of the name variable is dynamically inserted into the rendered output.

2. Using HTML Elements:

JSX allows you to use HTML elements directly within your code. You can also assign CSS classes using the className attribute.

3. Components in JSX:


JSX components can be used just like HTML elements. Here, I’m rendering a custom Header component within the App component.

4. Self-Closing Tags:


JSX supports self-closing tags, similar to HTML. It’s useful for elements without content, such as images or icons.

5. Comments in JSX:


Comments can be added within curly braces inside JSX and won’t be included in the rendered output. Or simply command + / for Mac and Ctrl + / for Windows.



JSX and JavaScript
1. JSX seamlessly integrates with JavaScript, allowing you to incorporate dynamic behavior within your components.

Using JavaScript Expressions in JSX:

Here, the value of the message variable is conditionally rendered based on the isLoggedIn variable.

2. Conditional Rendering in JSX:


JSX enables you to map over arrays and render dynamic lists of elements. The key attribute helps React efficiently update and re-render the list.

Conclusion
Now, you have some basic understanding of JSX in React. Feel free to navigate through some advanced articles to strengthen your basic understanding of it.

Happy Hacking!!😉