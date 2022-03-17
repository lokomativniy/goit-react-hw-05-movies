import SearchBar from '../../components/SearchBar/SearchBar';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../../services/movies-api';
import MovieList from '../../components/MovieList/MovieList';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    async function fetchMovies() {
      try {
        if (!searchQuery) {
          return;
        }
        const data = await api.fetchSearchMovie(searchQuery);
        setMovies(data.results);
        if (data.results.length === 0) {
          toast.info('Nothing found with name ' + query);
          return;
        }
      } catch (error) {
        toast.error('Something went wrong, please try again');
      }
    }
    fetchMovies();
  }, [searchQuery, query]);

  const handleFormSubmit = query => {
    setQuery(query);
    navigate({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} movies={movies} />
      {!movies ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
}
