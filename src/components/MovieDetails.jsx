import { useState, useEffect } from 'react';

const API_KEY = '8cbb0829';

function MovieDetails({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${'8cbb0829'}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('Failed to fetch movie details.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]); 

  if (isLoading) {
    return (
      <div className="text-center p-4">
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500">{error}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">
          Close
        </button>
      </div>
    );
  }

  if (!movie) {
    return null; 
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450.png?text=No+Image+Available'} 
            alt={`${movie.Title} poster`} 
            className="w-full md:w-1/3 rounded-lg object-cover shadow-lg" 
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{movie.Title}</h2>
            <p className="text-gray-600 mb-4">{movie.Year} | {movie.Genre}</p>
            
            <p className="text-gray-700 mb-4">{movie.Plot}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cast</h3>
                <p className="text-gray-700">{movie.Actors}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ratings</h3>
                {movie.Ratings && movie.Ratings.map((rating, index) => (
                  <p key={index} className="text-gray-700">
                    <span className="font-medium">{rating.Source}:</span> {rating.Value}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700"><span className="font-semibold">Director:</span> {movie.Director}</p>
              <p className="text-gray-700"><span className="font-semibold">Writer:</span> {movie.Writer}</p>
              <p className="text-gray-700"><span className="font-semibold">Country:</span> {movie.Country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;