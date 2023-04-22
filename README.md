# Asynchoronous JavaScript

## JSON

-JavaScript Object Notation
-lighweight data-interchange format that is easy for humans to read and write

- easy for machines to parse and generate
- JSON is a text format
- commonly used in web applications to exchange data between a server and a client

### How to create JSON?

- is represented as a collection of jey-value pairs

e.g
{
"location": "Manila",
"temperature": 30,
"city": "PH"
}

## random quote generator

https://api.quotable.io/quotes/random

## What is Asynchronous Programming?

- is a method of executing code where the code will not wait for the previous line to finish before running the next one.
- non-blocking

## Promises

- are a way to handle asynchronous programming in JavaScript.
- a promise represents the eventual completion

import "./style.css";

function fetchData() {
return new Promise((resolve, reject) => {
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => resolve(data))
.catch((error) => reject(error));
});
}

/\*
Create a function that returns a new Promise
function fetchData() {
return new Promise((resolve, reject) => {});
}
\*\*/

/\*
Inside the Promise object, use the fetch API to get the data
function fetchData() {
return new Promise((resolve, reject) => {
fetch("https://jsonplaceholder.typicode.com/posts/1")
});
}
\*\*/

/\*
The fetch API is also a Promise so we can catch if its a success/error
function fetchData() {
return new Promise((resolve, reject) => {
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => resolve(data))
.catch((error) => reject(error));
});
}
\*\*/

for copy in other file

/\*
const jsonData =
'{"title": "My Favorite Movies","movies": [{"title": "The Shawshank Redemption","year": 1994,"director": "Frank Darabont"},{"title": "The Godfather","year": 1972,"director": "Francis Ford Coppola"},{"title": "The Dark Knight","year": 2008,"director": "Christopher Nolan"}]}';

const favoriteMovie = JSON.parse(jsonData);

const movieData = JSON.parse(jsonData);

const title = document.createElement("h1");
title.textContent = `${favoriteMovie.title}`;
document.body.appendChild(title);

const app = document.getElementById("app");
app.appendChild(title);

movieData.movies.forEach((movies) => {
const movieContainer = document.createElement("div");
movieContainer.classList.add("movie-container");

const h2 = document.createElement("h2");
h2.textContent = movies.title;
document.body.appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = movies.year;
document.body.appendChild(h3);

const p = document.createElement("p");
p.textContent = movies.director;
document.body.appendChild(p);

movieContainer.append(h2, h3, p);
app.appendChild(movieContainer);
});

\*\*\*\*/

async function fetchQuote() {
try {
const response = await fetch("https://api.quotable.io/quotes/random");
const data = (await response).json();

    return data;

} catch (error) {
throw new Error(error);
}
}

fetchQuote()
.then((data) => console.log(data))
.catch((error) => console.error(error));
