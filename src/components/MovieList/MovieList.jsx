import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={s.item}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
