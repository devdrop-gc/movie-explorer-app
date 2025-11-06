import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams(); // Get the 'id' from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        // Fetch a single show by its ID
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovie(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]); // Re-run this effect if the ID in the URL changes

  if (loading) {
    return <p className="status-message">Loading movie details...</p>;
  }

  if (error) {
    return <p className="status-message error">Failed to fetch movie: {error}</p>;
  }

  if (!movie) {
    return <p className="status-message">Movie not found.</p>;
  }

  // Req 7: Show detailed info
  return (
    <div className="movie-details">
      <img
        src={movie.image?.original || 'https://via.placeholder.com/400x500'}
        alt={movie.name}
      />
      <div className="movie-details-info">
        <h1>{movie.name}</h1>
        <p>
          <strong>Language:</strong> {movie.language}
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating?.average || 'N/A'}
        </p>
        <p>
          <strong>Genres:</strong> {movie.genres.join(', ')}
        </p>
        <h3>Summary</h3>
        {/* The summary from this API contains HTML tags, so we use this */}
        <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
      </div>
    </div>
  );
}

export default MovieDetails;