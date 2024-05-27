// API Key: http://www.omdbapi.com/?i=tt3896198&apikey=671fc745
// document.addEventListener("DOMContentLoaded", function () {
//   const inputField = document.querySelector(".input");
//   const resultsContainer = document.createElement("div");
//   resultsContainer.classList.add("results-container");
//   const sectionWrapper = document.querySelector(".movies__container"); // Update the selector to match the existing HTML structure
//   sectionWrapper.appendChild(resultsContainer);

//   inputField.addEventListener("input", async function () {
//     const searchTerm = inputField.value;
//     if (searchTerm.trim() === "") {
//       resultsContainer.innerHTML = ""; // Clear previous results if input is empty
//       return;
//     }

//     const response = await fetch(
//       `https://www.omdbapi.com/?s=${searchTerm}&apikey=671fc745`
//     );
//     const data = await response.json();
//     if (data.Response === "True") {
//       const movies = data.Search;
//       resultsContainer.innerHTML = ""; // Clear previous results
//       movies.forEach((movie) => {
//         const movieElement = document.createElement("div");
//         movieElement.classList.add("movie");
//         const title = movie.Title;
//         const posterUrl = movie.Poster;
//         const movieTitle = document.createElement("h3");
//         movieTitle.textContent = title;
//         const moviePoster = document.createElement("img");
//         moviePoster.src = posterUrl;
//         moviePoster.alt = title;
//         movieElement.appendChild(movieTitle);
//         movieElement.appendChild(moviePoster);
//         resultsContainer.appendChild(movieElement);
//       });
//     } else {
//       resultsContainer.innerHTML = "<p>No results found</p>";
//     }
//   });
// });

// only shows movie when pressed enter or search button, search by name only

// document.addEventListener("DOMContentLoaded", function () {
//   const inputField = document.querySelector(".input");
//   const resultsContainer = document.createElement("div");
//   resultsContainer.classList.add("results-container");
//   const sectionWrapper = document.querySelector(".movies__container");
//   sectionWrapper.appendChild(resultsContainer);

//   const searchButton = document.getElementById("searchButton"); // Get the search button element

//   // Add event listener to the search button
//   searchButton.addEventListener("click", async function () {
//     await searchMovies();
//   });

//   // Add event listener for pressing Enter in the input field
//   inputField.addEventListener("keypress", async function (event) {
//     if (event.key === "Enter") {
//       await searchMovies();
//     }
//   });

//   async function searchMovies() {
//     const searchTerm = inputField.value;
//     if (searchTerm.trim() === "") {
//       resultsContainer.innerHTML = "";
//       return;
//     }

//     const response = await fetch(
//       `https://www.omdbapi.com/?s=${searchTerm}&apikey=671fc745`
//     );
//     const data = await response.json();
//     if (data.Response === "True") {
//       const movies = data.Search;
//       resultsContainer.innerHTML = "";
//       movies.forEach((movie) => {
//         const movieElement = document.createElement("div");
//         movieElement.classList.add("movie");
//         const title = movie.Title;
//         const posterUrl = movie.Poster;
//         const movieTitle = document.createElement("h3");
//         movieTitle.textContent = title;
//         const moviePoster = document.createElement("img");
//         moviePoster.src = posterUrl;
//         moviePoster.alt = title;
//         movieElement.appendChild(movieTitle);
//         movieElement.appendChild(moviePoster);
//         resultsContainer.appendChild(movieElement);
//       });
//     } else {
//       resultsContainer.innerHTML = "<p>No results found</p>";
//     }
//   }
// });

//burger menu function
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger__menu");
  const navLinks = document.querySelector(".nav__links--list");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("open"); // Toggle class to show/hide navigation links
  });
});
//burger menu function





document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector(".input");
  const resultsContainer = document.createElement("div");
  resultsContainer.classList.add("results-container");
  const sectionWrapper = document.querySelector(".movies__container");
  sectionWrapper.appendChild(resultsContainer);

  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", async function () {
    await searchMoviesByGenreOrTitle(); // Call the function to search movies by genre or title
  });

  inputField.addEventListener("keypress", async function (event) {
    if (event.key === "Enter") {
      await searchMoviesByGenreOrTitle(); // Call the function to search movies by genre or title
    }
  });

  async function searchMoviesByGenreOrTitle() {
    const searchTerm = inputField.value; // Get the search term from the input field
    if (searchTerm.trim() === "") {
      resultsContainer.innerHTML = "";
      return;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=671fc745`
    );
    const data = await response.json();
    if (data.Response === "True") {
      const movies = data.Search;
      resultsContainer.innerHTML = "";
      movies.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        const title = movie.Title;
        const genre = movie.Genre;
        const posterUrl = movie.Poster;
        const movieTitle = document.createElement("h3");
        movieTitle.textContent = title;
        const movieGenre = document.createElement("p");
        movieGenre.textContent = genre;
        const moviePoster = document.createElement("img");
        moviePoster.src = posterUrl;
        moviePoster.alt = title;
        movieElement.appendChild(movieTitle);
        movieElement.appendChild(movieGenre);
        movieElement.appendChild(moviePoster);
        resultsContainer.appendChild(movieElement);
      });
    } else {
      resultsContainer.innerHTML = "<p>No results found</p>";
    }
  }
});
