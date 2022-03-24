import React from 'react'
import Kids from './type-movies/Kids'
import Popular from './type-movies/Popular'
import Rated from './type-movies/Rated'
import MovieCard from './MovieCard'

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
function Movies() { 
    const [movies, setMovies] = React.useState ([])
    const [movieType, setMovieType] = React.useState("rated")
    const [isLoading, setIsLoading] = React.useState(false)
    const urlPopularity = '/discover/movie?sort_by=popularity.desc'
    const kids = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
    const rated = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'

    
    const getKidsMovies = () =>{
      fetch(`https://api.themoviedb.org/3${kids}&api_key=a77a471f25b126245b946660f886a046`)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
        setTimeout(() => {
          setIsLoading(false)  
        });
        
      })
    }
    const getPopularMovies = () =>{
      fetch(`https://api.themoviedb.org/3${urlPopularity}&api_key=a77a471f25b126245b946660f886a046`)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
        setTimeout(() => {
          setIsLoading(false)  
        });
      })
    }
    const getRatedMovies = () =>{
      fetch(`https://api.themoviedb.org/3${rated}&api_key=a77a471f25b126245b946660f886a046`)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
        setTimeout(() => {
          setIsLoading(false)  
        });
      })
    }
    React.useEffect(() => {
      setIsLoading(true)
      if(movieType === "rated") {
        getRatedMovies()
      }
      if(movieType === "kids"){
        getKidsMovies()
      }
      if(movieType === "popular") {
        getPopularMovies()
      }
    }, [movieType])
    return (
      <div className='movieContainer'>

        <div className='movieRoutes'>
          <span className='movieLinks' to="#" onClick={(e) => e.preventDefault() & setMovieType("rated")}>Rated</span>
          <span className='movieLinks' to="#" onClick={(e) => e.preventDefault() & setMovieType("popular")}>Popular</span>
          <span className='movieLinks' to="#" onClick={(e) => e.preventDefault() & setMovieType("kids")}>Kids</span>
        </div>
         <div className='movies'>
          { isLoading ? <span> ESTA CARGANDO </span> : 
              movies.map((movie) => <MovieCard  key={movie.id} {...movie} />)}
        </div>
      </div>
    )
  }


export default Movies