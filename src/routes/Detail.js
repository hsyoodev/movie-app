import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            id={movie.id}
            medium_cover_image={movie.large_cover_image}
            title={movie.title_long}
            summary={movie.description_full}
            genres={movie.genres}
          />
          <Link to={"/"}>Go to Home</Link>
        </div>
      )}
    </div>
  );
}

export default Detail;
