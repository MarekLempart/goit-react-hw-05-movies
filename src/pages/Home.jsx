// Home.jsx

import { LoadingIndicator } from 'components/LoadingDots/LoadingDots';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../services/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMoviesData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={LoadingIndicator.LoadingIndicator}>Loading...</div>
      ) : error ? (
        <p className={LoadingIndicator.errorMsg}>
          Sorry, failed to fetch trending movies. Please try again later.
        </p>
      ) : (
        <MovieList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;
