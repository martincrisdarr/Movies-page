import React, {useState, useEffect} from 'react'
import MovieCard from '../MovieCard'
const url = 'https://api.themoviedb.org/3'
const api_key = '&api_key=a77a471f25b126245b946660f886a046'
const rated = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
function Rated() {
    const [ratedMovies, setRatedMovies] = useState ([])   
    useEffect(() => {
      getPopularMovies()    
    }, [])
   const getPopularMovies = () =>{
       fetch(url + rated + api_key)
       .then((res) => res.json())
       .then(data => {
        setRatedMovies(data.results)
       })
   }
  return (
    <div className='movies'>
        { ratedMovies.length > 0 &&
        ratedMovies.map((movie) => <MovieCard  key={movie.id} {...movie} />)}
    </div>
  )
}

export default Rated