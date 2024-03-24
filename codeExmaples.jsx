import React from "react";

const name = "John";
const greeting = <h1>Hello, {name}!</h1>;
console.log(greeting);


const element1 = <div className="container">Hello, JSX!</div>;
console.log(element1);


const element2 = <img src="image.jpg" alt="An image" />;
console.log(element2)

const element3 = (
    <div>
        {/* This is a JSX comment */}
        <p>JSX is fun to learn</p>
    </div>
);
console.log(element3);


const App = () => {
    return <Header/>
};

console.log(App);


const isLoggedIn = true;
const message = isLoggedIn ? "welcome back!" : "Please log in.";
const element = <div>{message}</div> 
consol.log(element);


const showMessage = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn && <p>Welcome Back!</p>}
            {!isLoggedIn && <p>Please log in.</p>}
        </div>
    )
}


console.log(showMessage);


