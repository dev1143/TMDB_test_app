export const API_KEY='c8fd6df552e4bface56f97fe65cd9493';

const request_api={
    fetch_popular_movies:`/3/discover/movie?api_key=${API_KEY}`,
    fetcg_a_single_image:'http://image.tmdb.org/t/p/original',
    fetch_movie_description:`/3/movie/`

}
export default request_api;