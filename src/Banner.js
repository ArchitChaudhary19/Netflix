import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios'
import requests from "./Requests"

function Banner() {

    const  handleClick = () => {
        if (movie?.title) {
        window.location.href = `https://www.themoviedb.org/movie/${movie.id}${- movie?.name ||- movie?.title ||- movie?.original_name}  `
        }
        else {
            window.location.href =`https://www.themoviedb.org/tv/${movie.id}${- movie?.name ||- movie?.title ||- movie?.original_name} `
        }
    }

    

    const [movie, setMovie] = useState([]);

    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    console.log(movie);

    

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '.' : string;
    }


  return (
    <header 
    className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                 <button onClick={handleClick} className="banner__button" >Play</button>
                
            </div>
            <h1 className="banner__description"> {truncate(movie?.overview, 450)}
            </h1>
            
        </div>

        <div className="banner__fadebutton" />
    </header>
  )
}

export default Banner

