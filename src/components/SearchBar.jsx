import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-xl mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
        className="w-full sm:w-2/3 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full sm:w-1/3 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;