import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import * as api from '../../services/movies-api';
import MovieCard from '../../components/MovieCard/MovieCard';
import AdditionalInformation from '../../components/AdditionalInformation/AdditionalInformation';
import OnGoBackButton from '../../components/OnGoBackButton/OnGoBackButton';
import Loader from '../../components/Loader/Loader';

export default function MovieDetails() {
  const location = useLocation();
  const { movieid } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    api.fetchMovieDetails(movieid).then(setMovie);
  }, [movieid]);

  return (
    <>
      {movie.length === 0 ? (
        <Loader />
      ) : (
        <>
          <OnGoBackButton location={location} />
          <MovieCard movie={movie} />
          <AdditionalInformation movie={movie} />
        </>
      )}
      <Outlet />
    </>
  );
}
