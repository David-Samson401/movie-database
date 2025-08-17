const API_URL = "http://www.omdbapi.com/?apikey=" + import.meta.env.VITE_OMDB_API_KEY;

export async function fetchMovies(query) {
  const res = await fetch(`${API_URL}&s=${query}`);
  return res.json();
}

export async function fetchMovieDetails(id) {
  const res = await fetch(`${API_URL}&i=${id}`);
  return res.json();
}
