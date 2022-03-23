import React, {useState, useEffect} from 'react'
import MovieCard from '../MovieCard'

const url = 'https://api.themoviedb.org/3'
const api_key = '&api_key=a77a471f25b126245b946660f886a046'
const urlPopularity = '/discover/movie?sort_by=popularity.desc'
function Popular() {
    const [popularMovies, setPopularMovies] = useState ([])
    useEffect(() => {
      getPopularMovies()   
    }, [])
   const getPopularMovies = () =>{
       fetch(url + urlPopularity + api_key)
       .then((res) => res.json())
       .then(data => {
        setPopularMovies(data.results)
       })
   }
  return (
    <div className='movies'>
        { popularMovies.length > 0 &&
        popularMovies.map((movie) => <MovieCard  key={movie.id} {...movie} />)}
    </div>
  )
}

export default Popular