// MovieCard.jsx

import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();

  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!title) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div className={styles.movieCardContainer}>
        <img className={styles.img} src={posterUrl} alt={`${title} poster`} />
        <div className={styles.movieInfo}>
          <h2 className={styles.movieName}>
            {title ?? 'Unknown'} ({releaseYear})
          </h2>
          <p className={styles.movieInfoText}>User Score: {userScore}</p>
          <p className={styles.movieInfoText}>
            <span className={styles.movieInfoTextBold}>Overview:</span>{' '}
            {overview}
          </p>
          {genres && genres.length > 0 && (
            <p className={styles.movieInfoText}>
              <span className={styles.movieInfoTextBold}>Genres:</span>{' '}
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </div>
      </div>
      <div className={styles.moreInfoWrapper}>
        <h3 className={styles.moreInfoHeader}>Additional information</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link
              className={styles.styledLink}
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              className={styles.styledLink}
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
