import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={summary} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__sumamry">{summary.slice(0,140)}...</p>
                <ul className="movie__genres">
                    {genres.map((argu, index) => (<li key={index} className="genres__genre">{argu}</li>))}
                </ul>
            </div>
        </div>
    )
}

// json파일에서 데이터 형식 보고 맞춰주면 된다
Movie.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;