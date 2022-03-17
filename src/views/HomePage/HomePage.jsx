import { useState, useEffect } from 'react';
import * as api from '../../services/movies-api';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css'

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    api.fetchTrending().then(data => setMovies(data.results));
  }, []);
  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
}
