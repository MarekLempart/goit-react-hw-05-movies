// Cast.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/Api';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.castHeader}>Cast</h3>
      {cast.length ? (
        <ul className={styles.castList}>
          {cast.map(actor => (
            <li className={styles.castListItem} key={actor.id}>
              {actor.profile_path ? (
                <img
                  className={styles.castImage}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  className={styles.castImage}
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}
              <div className={styles.castInfo}>
                <h3 className={styles.castName}>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noCastText}>
          We don't have any information about the cast yet.
        </p>
      )}
    </div>
  );
};

export default Cast;
