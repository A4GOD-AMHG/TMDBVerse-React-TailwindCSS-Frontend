import { movieService } from '../services/api';
import { useFetch } from './useFetch';

// Refetches after each search because searches feed the trending ranking.
export const useTrendingMovies = (searchQuery) => {
    const { data, isLoading, error } = useFetch(movieService.getTrendingMovies, [searchQuery]);
    return {
        trendingMovies: Array.isArray(data) ? data : [],
        trendingLoading: isLoading,
        trendingError: error,
    };
};
