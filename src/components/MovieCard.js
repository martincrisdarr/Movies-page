import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
function MovieCard({ title, poster_path, overview, vote_average}) {
    const imageUrl = "https://image.tmdb.org/t/p/w200" 
  return (
    <>
    <div className='movieCards'>
      
        <img src={imageUrl + poster_path} alt= {title} />
        <div className='titleVote'>
          {title} 
          <div className='starVote'>
            <BsFillStarFill className='star' size={15}/>
            <p>{vote_average} </p>
          </div>
        </div>
      
      <div className='infoCard'>
          <h2>Overview:</h2>
          <p>{overview}</p>
      </div></div>
      </>
  )
}

export default MovieCard