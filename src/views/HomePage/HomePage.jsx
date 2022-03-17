import { useState, useEffect } from 'react';
import * as api from '../../services/movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    api.fetchTrending().then(data => setMovies(data.results));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
}
