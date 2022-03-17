import s from './MovieCard.module.css';
import PropTypes from 'prop-types';
export default function MovieCard({ movie }) {
  return (
    <>
      <div className={s.overlay}>
        <img
          className={s.img}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : 'http://dummyimage.com/300x450.99cccc.jpg&text=No poster yet!'
          }
          alt={movie.title}
        />
        <div className={s.description}>
          <h1 className={s.heroTitle}>{movie.title}</h1>
          <span className={s.date}>({movie.release_date.slice(0, 4)})</span>
          <p>User Score: {movie.vote_average * 10}%</p>
          {movie.overview && <h3 className={s.title}>Overview</h3>}
          <p>{movie.overview}</p>
          {movie.genres && <h3 className={s.title}>Genres</h3>}
          <ul className={s.listGenres}>
            {movie.genres &&
              movie.genres.map(genre => (
                <li key={genre.id} className={s.itemGenre}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
