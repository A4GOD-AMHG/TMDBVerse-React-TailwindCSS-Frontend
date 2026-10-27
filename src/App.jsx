import React, { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import Search from './components/Search';
import Hero from './components/Hero';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import StatusMessage from './components/StatusMessage';
import { useSearchMovies } from './hooks/useSearchMovies';
import Footer from './components/Footer';
import { useDebounce } from 'react-use';
import { useTrendingMovies } from './hooks/useTrendingMovies';
import { Link } from 'react-router-dom';
import { posterUrl } from './services/api';

const App = () => {
  const { movies, isLoading, error } = useMovies();
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useDebounce(() => { setDebouncedSearchTerm(searchValue) }, 500, [searchValue]);

  const { searchResults, isSearching, searchError } = useSearchMovies(debouncedSearchTerm);
  const { trendingMovies, trendingLoading, trendingError } = useTrendingMovies(debouncedSearchTerm);

  const isSearchMode = searchValue.trim() !== '';
  // Treat the debounce window as loading so "no results" doesn't flash while typing.
  const isDebouncing = searchValue !== debouncedSearchTerm;
  const displayedMovies = isSearchMode ? searchResults : movies;
  const isDisplayLoading = isSearchMode ? isSearching || isDebouncing : isLoading;
  const displayError = isSearchMode ? searchError : error;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="pattern" aria-hidden="true" />
      <div className="wrapper flex-grow">
        <header>
          <Hero />
          <h1>
            Discover Your Next <span className="text-gradient">Favorite Movie</span> in Seconds
          </h1>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </header>

        {(trendingLoading || trendingError || trendingMovies.length > 0) && (
          <section className="trending">
            <h2>Trending Now</h2>
            {trendingLoading && trendingMovies.length === 0 ? (
              <Spinner />
            ) : trendingError ? (
              <StatusMessage type="error">{trendingError}</StatusMessage>
            ) : (
              <ul>
                {trendingMovies.map((movie, index) => (
                  <li key={movie.id}>
                    <p aria-hidden="true">{index + 1}</p>
                    <Link to={`/movies/${movie.id}`} className="shrink-0" title={movie.title}>
                      <img src={posterUrl(movie.poster_path, 'w342')} alt={movie.title} loading="lazy" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        <section className="all-movies">
          <h2>{isSearchMode ? `Results for "${searchValue.trim()}"` : 'Latest Movies'}</h2>

          {isDisplayLoading ? (
            <Spinner />
          ) : displayError ? (
            <StatusMessage type="error">{displayError}</StatusMessage>
          ) : displayedMovies.length === 0 ? (
            <StatusMessage>
              {isSearchMode ? 'No movies found with that title. Try another search.' : 'No movies available right now.'}
            </StatusMessage>
          ) : (
            <div className="movie-grid">
              {displayedMovies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default App;
