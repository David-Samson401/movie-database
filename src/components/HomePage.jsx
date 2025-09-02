import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function HomePage({ searchQuery, handleMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const searchTerm = query || "action"; 
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please check your network and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchQuery);
  }, [searchQuery]);

  if (isLoading) {
    return <p className="text-center my-4">Loading movies...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 my-4">{error}</p>;
  }

  if (movies.length === 0 && searchQuery) {
    return <p className="text-center my-4">No movies found for "{searchQuery}". Try a different search term.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-6">
        {searchQuery ? `Search Results for "${searchQuery}"` : "Popular Movies"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {movies.map(movie => (
          <MovieCard 
            key={movie.imdbID} 
            movie={movie} 
            onClick={() => handleMovieClick(movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;