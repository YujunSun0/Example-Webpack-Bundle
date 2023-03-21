import { useEffect, useState } from "react";
import movieApi from "./api/movieApi";
import "./App.css";
import Movie from "./component/Movie";
import Loading from "./Loading";

function App() {
  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 데이터 가져오기
    setIsLoading(true);
    setTimeout(() => {
      movieApi()
        .then((res) => setData(res))
        .catch((err) => console.log(err));
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="app-nav"></div>
      <div className="app-container">
        {isLoading ? (
          <Loading />
        ) : (
          data &&
          data.results.map((item, i) => {
            return (
              <Movie
                key={i}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
