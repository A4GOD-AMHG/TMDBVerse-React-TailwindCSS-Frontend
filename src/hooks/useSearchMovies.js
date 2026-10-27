import { movieService } from '../services/api';
import { useFetch } from './useFetch';

// The query is already debounced by the caller.
export const useSearchMovies = (searchQuery) => {
    const query = searchQuery.trim();
    const { data, isLoading, error } = useFetch(
        () => (query ? movieService.searchMovies(query) : Promise.resolve([])),
        [query],
    );
    return { searchResults: data ?? [], isSearching: isLoading, searchError: error };
};
