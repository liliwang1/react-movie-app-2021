import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, summary, poster, genres, year, rating }) {
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='info'>
        <h3 className='title'>{title}</h3>
        <h5 className='year'>{year}</h5>
        <div className='genres'>
          {genres.map((genre) => (
              <span className='genre' key={id + genre}>{genre}</span>
          ))}
        </div>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
