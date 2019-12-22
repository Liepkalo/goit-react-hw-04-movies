import axios from 'axios';

const options = {
  BASE_URL: 'https://api.themoviedb.org/3/trending/all/day?',

  API_KEY: 'api_key=69671bce0315da748b2ee35cbe3b1af1',
};

export const fetchMovies = () =>
  axios.get(`${options.BASE_URL + options.API_KEY}`);

export const fetchMovieWithId = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?${options.API_KEY}&language=en-US`,
  );

export const fetchMovieCast = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?${options.API_KEY}&language=en-US`,
  );

export const fetchMovieReview = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?${options.API_KEY}&language=en-US&page=1`,
  );

export const fetchSearchMovie = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?${options.API_KEY}&language=en-US&query=${query}&page=1`,
  );
