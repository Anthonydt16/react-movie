import React from 'react';

const Card = ({ movie }) => {
    const dateFormater = (date) =>{
        let [yy, mm, dd] = date.split("-");
        return [yy, mm, dd].join("/");
    }
    return (
        <div className="card">
            <img src={movie.poster_path === true ?
                "https://image.tmdb.org/t/p/w500/"+movie.poster_path :
                "../img/poster.jpg"} alt={movie.poster_path}/>
            <h2>{movie.title}</h2>
            {movie.release_date ? <h5>sorti le : {dateFormater(movie.release_date)} </h5> : ""}
        </div>
    );
};

export default Card;