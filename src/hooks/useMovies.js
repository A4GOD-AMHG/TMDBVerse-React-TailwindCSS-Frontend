import { useState, useEffect } from 'react';
import { movieService } from '../services/api';

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            setError('');
            try {
                const data = await movieService.getDiscoverMovies();
                setMovies(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { movies, isLoading, error };
};