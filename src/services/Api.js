import axios from 'axios';
const API_KEY = '4123e3b2001d1c6636516ddf9773c242';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      return response.data.results.map(({ id, title, original_title, poster_path }) => ({  id,
            title: title || original_title,
            poster_path, }));;
    });
};

const getSearchedMovies = query => {
  return axios
    .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
    .then(response => {
      return response.data.results.map(
          ({ id, title, original_title, poster_path }) => ({
            id,
            title: title || original_title,
            poster_path,
          })
        );;
    });
};

const getMovieDetails = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(response => {
      return response.data;
    });
};

const getMovieCast = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => {
      return response.data.cast;
    } )

};

const getMovieReviews = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => {
      return response.data.results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
    });
    
};

const api = {
  getTrendingMovies,
  getSearchedMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
export default api;