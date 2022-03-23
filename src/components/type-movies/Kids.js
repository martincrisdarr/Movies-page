import React,{ useState, useEffect} from 'react'
import MovieCard from '../MovieCard'
// import {url,api_key, kids} from './../api/apiConfig.js'
const url = 'https://api.themoviedb.org/3'
const api_key = '&api_key=a77a471f25b126245b946660f886a046'
const urlPopularity = '/discover/movie?sort_by=popularity.desc'
const kids = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
function Kids() {
    const [kidsMovies, setKidsMovies] = useState([])
    useEffect(() => {
      
        getKidsMovies()
      }, [])
    const getKidsMovies = () =>{
        fetch(url + kids + api_key)
        .then((res) => res.json())
        .then(data => {
          setKidsMovies(data.results)
        })
        }
  return (
    <>   
    <div className='movies'>
        { kidsMovies.length > 0 &&
        kidsMovies.map((movie) => <MovieCard  key={movie.id} {...movie} />)}
    </div>
    </>
  )
}

export default Kids