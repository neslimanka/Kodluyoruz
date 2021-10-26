import { FETCH_ALL_MOVIES } from '../actionTypes';

const fetchAllMovies = (movieCollection, genre) => ({
  type: FETCH_ALL_MOVIES,
  payload: movieCollection,
  genre,
});

export default fetchAllMovies;