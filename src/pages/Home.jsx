import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-page">
      <h1>Welcome to the Movie Explorer</h1>
      <p>
        Browse movies, search for your favorites, and enjoy the show.
      </p>
      <p>
        You are currently in <strong>{theme} mode</strong>.
      </p>
    </div>
  );
}

export default Home;