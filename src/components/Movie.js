import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, title, summary, poster, genres, year, rating }) {
  return (
    <Link
      to={{
        pathname: '/movie/'+id,
        state: { id, title, summary, poster, genres, year, rating },
      }}>
      <div className='movie'>
        <img className='poster' src={poster} alt={title} title={title} />
        <div className='info'>
          <h3 className='title'>{title}</h3>
          <h5 className='year'>Year: {year}</h5>
          <div className='genres'>
            Genres:
            {genres.map((genre, index) => (
              <span className='genre' key={index}>
                {genre}
              </span>
            ))}
          </div>
          <p className='summary'>{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
