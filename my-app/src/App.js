import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieBox from './MovieBox';


const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=414eec00dd3b35b52e5201e1ec693543"
function App() {

  const [movies, setMovies] = useState([]);
  
  useEffect(() =>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div className='container'>
      <div className='grid'>
      {movies.map((moviesReq)=> 
      <MovieBox key={moviesReq.id} {...moviesReq}/>)}
      </div>
    </div>
  );
}

export default App;
