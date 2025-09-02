import React from 'react';

function MovieCard({ movie, onClick }) {
  const posterUrl = movie.Poster === 'N/A' 
    ? 'https://via.placeholder.com/300x450.png?text=No+Image+Available' 
    : movie.Poster;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img 
        src={posterUrl} 
        alt={`${movie.Title} poster`} 
        className="w-full h-80 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 truncate">{movie.Title}</h3>
        <p className="text-sm text-gray-500 mt-1">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;