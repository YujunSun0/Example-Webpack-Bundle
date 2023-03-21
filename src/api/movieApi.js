function movieApi() {
  return fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=dd9e862b7fc4ee5f9e235dcd0be1af58&language=ko&page=1&region=KR",
  ).then((res) => res.json());
}

export default movieApi;
