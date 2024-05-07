// MovieList.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ trendingMovies }) => {
  return (
    <section className={styles.styledSection}>
      <h2 className={styles.sectionTitle}>Trending today</h2>
      <ul className={styles.list}>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id} className={styles.listItem}>
            <Link
              to={`/movies/${trendingMovie.id}`}
              className={styles.styledLink}
            >
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
