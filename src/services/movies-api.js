// /trending/get-trending
// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies
//  поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details
// запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits
//  запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews
// запрос обзоров для страницы кинофильма.
// import axios from 'axios';

const API_KEY = 'aebb9307742aac53025a9ce54f867d2d';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
export function fetchTrending() {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}
export function fetchSearchMovie(query) {
  return fetchMovies(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false`,
  );
}
export function fetchMovieDetails(movieid) {
  return fetchMovies(`${BASE_URL}/movie/${movieid}?api_key=${API_KEY}`);
}
export function fetchMovieCredits(movieid) {
  return fetchMovies(`${BASE_URL}/movie/${movieid}/credits?api_key=${API_KEY}`);
}
export function fetchMoviesReviews(movieid) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieid}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
