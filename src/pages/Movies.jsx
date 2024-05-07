// Movies.jsx

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import movieListStyles from '../components/MovieList/MovieList.module.css';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import { fetchMovieByName } from '../services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <div className={movieListStyles.sectionTitle}>Movies Page</div>
      <SearchMovies onSubmit={handleSubmit} />
      <ul className={movieListStyles.list}>
        {movies.map(movie => (
          <li className={movieListStyles.listItem} key={movie.id}>
            <Link
              className={movieListStyles.link}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
