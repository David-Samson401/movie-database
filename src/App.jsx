import { useState } from 'react';
import SearchBar from './components/SearchBar';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';


const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (id) => {
    setSelectedMovieId(id);
  };
  
  const handleCloseDetails = () => {
    setSelectedMovieId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">Movie Database</h1>
      
      <SearchBar onSearch={setSearchQuery} />
      
      <HomePage 
        searchQuery={searchQuery}
        handleMovieClick={handleMovieClick} 
      />

      {selectedMovieId && (
        <MovieDetails 
          movieId={selectedMovieId} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
}

export default App;