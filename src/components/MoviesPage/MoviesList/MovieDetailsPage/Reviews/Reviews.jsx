import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';
import * as API from '../../../../../services/service';

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}.isRequired),
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    this.fetchMovieReview();
  }

  fetchMovieReview = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.fetchMovieReview(movieId).then(res => {
      this.setState({ reviews: res.data.results });
    });
  };

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length === 0 && (
          <p>We don&#39;t have any reviews for this movie.</p>
        )}
        {reviews.length !== 0 && (
          <ul className={styles.page}>
            {reviews.map(el => (
              <li key={el.id} className={styles.char}>
                <p>Author: {el.author}</p>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
