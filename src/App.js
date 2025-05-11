
// 75ffd588
import './App.css';
import { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=75ffd588';
const movie1 = {
  Title: 'Spiderman',
  Year: '1990', 
  imdbID: 'tt0100669', 
  Type: 'movie', 
  Poster: "N/A"
}
const App = () =>{
  // [] empty array is default value
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    //`` -> is a template string so we can dynamically speecify it
      const response = await fetch(`${API_URL}&s=${title}`);// this will call our api
    
      const data = await response.json();
      setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);


  //JSX
  return (
    <div className="app">
      <h1>MOVIELAND</h1>
      <div className="search">
        {/* the value is statically set as superman
        so to make it change we use onChange  */}
        <input 
        placeholder="Search for Movies" 
        value="Superman" 
        onChange={() => {}}
        />

        <img 
        src="{SearchIcon}"
        alt="search" 
        onClick={() => {}}
        />
      </div>
      {
        movies?.length > 0
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie = {movie}/>
            ))}
          </div>
        ) :
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;