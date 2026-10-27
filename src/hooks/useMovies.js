import { movieService } from '../services/api';
import { useFetch } from './useFetch';

export const useMovies = () => {
    const { data, isLoading, error } = useFetch(movieService.getDiscoverMovies, []);
    return { movies: data ?? [], isLoading, error };
};
