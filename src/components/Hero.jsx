import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import StatusMessage from './StatusMessage';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { posterUrl } from '../services/api';

// Poster layout for the 3 popular movies: #1 in the center, #2 left, #3 right.
const POSITIONS = [
    'relative h-[175px] w-[125px] sm:h-[210px] sm:w-[150px] md:h-[230px] md:w-[170px] z-20 -translate-y-2',
    'absolute h-[165px] w-[115px] sm:h-[190px] sm:w-[140px] md:h-[210px] md:w-[160px] -rotate-12 -translate-x-28 z-10 hover:z-30',
    'absolute h-[165px] w-[115px] sm:h-[190px] sm:w-[140px] md:h-[210px] md:w-[160px] rotate-12 translate-x-28 z-10 hover:z-30',
];

const Hero = () => {
    const { movies, isLoading, error } = usePopularMovies();

    if (isLoading) {
        return <div className="flex items-center justify-center h-64"><Spinner /></div>;
    }

    if (error) {
        return <StatusMessage type="error">{error}</StatusMessage>;
    }

    if (movies.length === 0) {
        return <StatusMessage>No popular movies found.</StatusMessage>;
    }

    return (
        <div className="hero relative flex items-center justify-center mb-8 h-64 animate-fade-in">
            {movies.slice(0, 3).map((movie, index) => (
                <Link
                    key={movie.id}
                    to={`/movies/${movie.id}`}
                    className={`${POSITIONS[index]} poster-card`}
                >
                    <img
                        src={posterUrl(movie.poster_path)}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </Link>
            ))}
        </div>
    );
};

export default Hero;
