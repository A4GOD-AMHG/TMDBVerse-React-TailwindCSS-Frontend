import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_GO_FIBER_BACKEND,
    timeout: 10000,
});

// The backend always answers errors as { error: string }.
const get = async (url, fallbackMessage, params) => {
    try {
        const { data } = await API.get(url, { params });
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.error || fallbackMessage);
    }
};

export const movieService = {
    searchMovies: (query) => get('/search', 'Failed to search movies', { q: query }),
    getDiscoverMovies: () => get('/discover', 'Failed to fetch movies'),
    getTrendingMovies: () => get('/trending', 'Failed to fetch trending movies'),
    getMovieDetails: (movieId) => get(`/movies/${movieId}`, 'Failed to fetch movie details'),
    getPopularMovies: () => get('/popular', 'Failed to fetch popular movies'),
};

export const posterUrl = (path, size = 'w500') =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : '/no-movie.png';
