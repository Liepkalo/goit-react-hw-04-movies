import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';

const Movie = ({
  overview,
  genres,
  name,
  title,
  poster_path,
  release_date,
  vote_average,
}) => {
  return (
    <article className={styles.page}>
      <img
        src={`https://image.tmdb.org/t/p/w500${  poster_path}`}
        alt={name || title}
        align="left"
      />
      <h2>
        {name || title} {`(${release_date.substring(0, 4)})`}
      </h2>
      <p>{`User score: ${vote_average * 10}%`}</p>
      <p>
        <b>Overview:</b> {overview || 'No overview'}
      </p>
      <p>
        <b>Genres:</b>{' '}
        {genres ? genres.map(el => el.name).join(', ') : 'No information'}
      </p>
    </article>
  );
};

Movie.propTypes = {
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

Movie.defaultProps = {
  name: '',
  title: '',
};

export default Movie;
