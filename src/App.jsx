import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navbar is outside Routes to show on every page */}
      <Navbar />

      <main className="content">
        {/* Req 1: Setup 3 routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;