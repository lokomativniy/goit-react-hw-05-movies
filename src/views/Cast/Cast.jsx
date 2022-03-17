import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/movies-api';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieid } = useParams();
  useEffect(() => {
    api.fetchMovieCredits(movieid).then(data => {
      setCast(data.cast);
    });
  }, [movieid]);
  return (
    <>
      {cast.length !== 0 ? (
        <>
          <h2 className={s.title}>Cast</h2>
          <ul className={s.actorsList}>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : 'http://dummyimage.com/250x375/99cccc.jpeg&text=No photo'
                  }
                  alt={actor.name}
                  width="250"
                />
                <p className={s.name}>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>No cast yet</h2>
      )}
    </>
  );
}
