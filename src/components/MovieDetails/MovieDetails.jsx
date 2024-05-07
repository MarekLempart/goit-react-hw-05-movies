// MovieDetails.jsx

import { Suspense, useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services/Api';
import MovieCard from '../MovieCard/MovieCard';
import loadingIndicator from '../SharedLayout/SharedLayout.module.css';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <div className={styles.container}>
        <Link to={location?.state?.from ?? '/'}>
          <button className={styles.button}>
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Powrót
          </button>
        </Link>
        <MovieCard movie={selectedMovie} />
        <Suspense
          fallback={<div className={loadingIndicator.loadingDots}></div>}
        >
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
