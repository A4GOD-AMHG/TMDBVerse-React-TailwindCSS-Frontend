import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { posterUrl } from '../services/api';
import Spinner from './Spinner';
import StatusMessage from './StatusMessage';

const formatRuntime = (minutes) => `${Math.floor(minutes / 60)}h ${minutes % 60}m`;

const BackButton = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        aria-label="Go back"
        className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur text-white p-2 rounded-full hover:bg-black/75 transition cursor-pointer"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
    </button>
);

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { movie, isLoading, error } = useMovieDetails(id);
    // Direct visits have no history entry to go back to.
    const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate('/'));

    if (isLoading) {
        return <main className="min-h-screen flex items-center justify-center"><Spinner /></main>;
    }

    if (error || !movie) {
        return (
            <main className="min-h-screen relative flex items-center justify-center px-4">
                <BackButton onClick={goBack} />
                <StatusMessage type="error">{error || 'Movie not found'}</StatusMessage>
            </main>
        );
    }

    const backdrop = movie.backdrop_path
        ? posterUrl(movie.backdrop_path, 'original')
        : posterUrl(movie.poster_path, 'original');
    const year = movie.release_date?.split('-')[0];

    return (
        <main className="min-h-screen text-white pb-12 animate-fade-in">
            <div
                className="relative h-64 md:h-[45vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${backdrop})` }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent" />
                <BackButton onClick={goBack} />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-40">
                <div className="flex flex-col md:flex-row gap-8">
                    <img
                        src={posterUrl(movie.poster_path)}
                        alt={movie.title}
                        className="hidden md:block md:w-1/3 lg:w-1/4 self-start rounded-xl shadow-2xl shadow-black/60 ring-1 ring-light-100/10"
                    />
                    <div className="md:w-2/3 lg:w-3/4 md:pt-24">
                        <h1 className="text-left mx-0 text-3xl md:text-5xl leading-tight mb-4">{movie.title}</h1>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {year && <span className="chip">{year}</span>}
                            <span className="chip chip-accent">★ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10</span>
                            {movie.runtime > 0 && <span className="chip">{formatRuntime(movie.runtime)}</span>}
                            {movie.original_language && <span className="chip">{movie.original_language.toUpperCase()}</span>}
                            {movie.search_count > 0 && <span className="chip">🔥 {movie.search_count} searches</span>}
                        </div>
                        {movie.genres?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {movie.genres.map((genre) => (
                                    <span key={genre.id} className="chip chip-outline">{genre.name}</span>
                                ))}
                            </div>
                        )}
                        <h2 className="text-xl sm:text-xl mb-2">Overview</h2>
                        <p className="text-light-100/80 mb-8 leading-relaxed">{movie.overview || 'No overview available.'}</p>
                        <dl className="grid grid-cols-2 gap-4 text-sm md:text-base">
                            <div>
                                <dt className="text-gray-100">Release Date</dt>
                                <dd>{movie.release_date || 'N/A'}</dd>
                            </div>
                            <div>
                                <dt className="text-gray-100">Original Title</dt>
                                <dd>{movie.original_title || movie.title}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MovieDetails;
