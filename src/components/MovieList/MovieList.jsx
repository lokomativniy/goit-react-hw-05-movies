import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.movieList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={s.item}
          >
            <img
              className={s.img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : 'http://dummyimage.com/100x150.99cccc.jpg&text=No poster yet!'
              }
              alt={title}
              width="100"
            />
            <h4>{title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
