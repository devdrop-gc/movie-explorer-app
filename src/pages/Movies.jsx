import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

// Helper function to create a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Movies() {
  // Req 2: Store movies in useState
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Req 6: State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Req 2: Fetch data using useEffect + axios
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // Start loading
        // --- ADDED 2 SECOND DELAY ---
        // This artificial delay makes the "Loading..." message visible
        await delay(2000);
        const response = await axios.get('https://api.tvmaze.com/shows');
        setMovies(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set error message
        setMovies([]); // Clear movies
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMovies();
  }, []); // Empty array means this runs once on mount

  // Req 6: Filter movies based on search term
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [movies, searchTerm]);

  // Req 3: Conditional Rendering: Loading
  if (loading) {
    return <p className="status-message">Loading movies...</p>;
  }

  // Req 3: Conditional Rendering: Error
  if (error) {
    return <p className="status-message error">Failed to fetch movies: {error}</p>;
  }

  // Req 3: Conditional Rendering: Success
  return (
    <div className="movies-page">
      <h2>Explore Movies</h2>
      
      {/* Req 6: Search input */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Req 6: Conditional message for no results */}
      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p className="status-message">No movies found matching "{searchTerm}".</p>
      )}
    </div>
  );
}

export default Movies;