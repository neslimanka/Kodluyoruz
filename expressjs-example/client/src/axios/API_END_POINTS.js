const API_KEY = "2500c4b48a62c51f8de04354a8ec1079";

const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const requests = {
  
  Cinemaximum: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  Trending: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Blog: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Technologies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 
};

export default requests;