import { movieService } from '../services/api';
import { useFetch } from './useFetch';

export const useMovieDetails = (movieId) => {
    const { data, isLoading, error } = useFetch(() => movieService.getMovieDetails(movieId), [movieId]);
    return { movie: data, isLoading, error };
};
