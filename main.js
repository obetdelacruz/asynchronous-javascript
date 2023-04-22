import "./style.css";

const jsonData =
  '{"title": "My Favorite Movies","movies": [{"title": "The Shawshank Redemption","year": 1994,"director": "Frank Darabont"},{"title": "The Godfather","year": 1972,"director": "Francis Ford Coppola"},{"title": "The Dark Knight","year": 2008,"director": "Christopher Nolan"}]}';

const favoriteMovie = JSON.parse(jsonData);

const movieData = JSON.parse(jsonData);

const title = document.createElement("h1");
title.textContent = `${favoriteMovie.title}`;
document.body.appendChild(title);

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
});
