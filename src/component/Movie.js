function Movie({ title, poster_path, vote_average }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie-container">
      <img src={baseUrl + poster_path} alt={"영화포스터"} />
      <div className="movie-info">
        <h5>{title}</h5>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}

export default Movie;
