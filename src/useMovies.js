import { useState, useEffect } from 'react';

const KEY = 'c2e9b79e';

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error('There was something wrong while fetching movies.');

          const data = await res.json();

          if (data.Response === 'False') throw new Error('Movie Not Found.');

          setMovies(data.Search);
        } catch (e) {
          if (e.name !== 'AbortError') {
            // console.log(e.message);
            setError(e.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }
      // handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { isLoading, movies, error };
}
