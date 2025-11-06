import { Link } from 'react-router-dom';

// Req 4: MovieCard displays individual movie details
function MovieCard({ movie }) {
  // Handle cases where rating might be missing
  const rating = movie.rating?.average ? movie.rating.average : 'N/A';

  return (
    // Req 4: Clicking a movie navigates to MovieDetails/:id
    <Link to={`/moviedetails/${movie.id}`} className="movie-card">
      <img
        src={movie.image?.medium || 'https://via.placeholder.com/210x295'}
        alt={movie.name}
      />
      <div className="movie-card-info">
        <h3>{movie.name}</h3>
        <p>Language: {movie.language}</p>
        <p>Rating: {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;