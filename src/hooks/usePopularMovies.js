import { movieService } from '../services/api';
import { useFetch } from './useFetch';

export const usePopularMovies = () => {
    const { data, isLoading, error } = useFetch(movieService.getPopularMovies, []);
    return { movies: data ?? [], isLoading, error };
};
