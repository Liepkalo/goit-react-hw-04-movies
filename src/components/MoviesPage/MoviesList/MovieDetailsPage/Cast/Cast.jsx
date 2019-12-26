import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../../../../services/service';
import styles from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}.isRequired),
    }).isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    this.fetchMovieCast();
  }

  fetchMovieCast = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.fetchMovieCast(movieId).then(res => {
      this.setState({ cast: res.data.cast });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className={styles.page}>
          {cast.map(char => (
            <li key={char.cast_id} className={styles.char}>
              <img
                alt={char.name}
                src={`https://image.tmdb.org/t/p/w500${char.profile_path}`}
              />
              <p>{char.name}</p>
              <p>Character: {char.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Cast;
