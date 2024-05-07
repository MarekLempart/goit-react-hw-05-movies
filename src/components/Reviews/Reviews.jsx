// Reviews.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/Api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.reviewHeader}>Reviews</h3>
      {reviews.length ? (
        <ul className={styles.reviewList}>
          {reviews.map(review => (
            <li className={styles.reviewListItem} key={review.id}>
              <h4 className={styles.author}>Author: {review.author}</h4>
              <p className={styles.review}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noReviewsText}>
          We don't have any reviews for this movie yet.
        </p>
      )}
    </div>
  );
};

export default Reviews;
