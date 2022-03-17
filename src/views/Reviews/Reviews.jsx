import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/movies-api';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, SetReviews] = useState([]);
  const { movieid } = useParams();
  useEffect(() => {
    api.fetchMoviesReviews(movieid).then(data => {
      SetReviews(data.results);
    });
  }, [movieid]);
  return (
    <>
      {reviews.length !== 0 ? (
        <>
          <h3 className={s.title}>Review</h3>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p className={s.author}>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>No rewiews yet</h2>
      )}
    </>
  );
}
