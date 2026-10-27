import { useState, useEffect } from 'react';

// Runs `fetcher` whenever `deps` change and ignores responses from outdated requests.
export const useFetch = (fetcher, deps) => {
    const [state, setState] = useState({ data: null, isLoading: true, error: '' });

    useEffect(() => {
        let active = true;
        setState((prev) => ({ ...prev, isLoading: true, error: '' }));

        fetcher()
            .then((data) => active && setState({ data, isLoading: false, error: '' }))
            .catch((err) => active && setState({ data: null, isLoading: false, error: err.message }));

        return () => { active = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return state;
};
