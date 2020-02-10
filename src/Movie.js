import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}){
    return (
        <div>
            <h5>{title}</h5>
            <img src={poster} alt={summary}/>
        </div>
    )
}

// json파일에서 데이터 형식 보고 맞춰주면 된다
Movie.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;