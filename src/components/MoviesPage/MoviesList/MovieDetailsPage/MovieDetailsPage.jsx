import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  fetchMovieWithId,
  fetchMovieCast,
  fetchMovieReview,
} from '../../../../services/service';

import styles from './MovieDetailsPage.module.css';

import Movie from '../Movie/Movie';

import Cast from './Cast/Cast';

import Review from './Reviews/Reviews';

class MovieDetailsPage extends Component {
  state = { search: null, movie: null, cast: [], review: [] };

  componentDidMount() {
    console.log(this.props.location);

    const { movieId } = this.props.match.params;

    const search = this.props.location.state
      ? this.props.location.state.from.search
      : '';

    fetchMovieWithId(movieId)
      .then(alldata => alldata.data)

      .then(movie => this.setState({ movie }));

    fetchMovieCast(movieId)
      .then(alldata => alldata.data)

      .then(data => data.cast)

      .then(cast => this.setState({ cast }));

    fetchMovieReview(movieId)
      .then(alldata => alldata.data)

      .then(data => data.results)

      .then(review => this.setState({ review }));

    this.setState({ search });
  }

  handleGoback = () => {
    const { history } = this.props;

    const { search } = this.state;

    if (search) {
      return history.push(`/movies${search}`);
    }

    return history.push('/');
  };

  render() {
    const { movie, cast, review, search } = this.state;

    const { match, location } = this.props;

    const WrappedCast = function(props) {
      return <Cast {...props} cast={cast} />;
    };

    const WrappedReview = function(props) {
      return <Review {...props} review={review} />;
    };

    return (
      <div>
        <button
          type="button"
          className={styles.backButton}
          onClick={this.handleGoback}
        >
          Go back
        </button>

        {movie && <Movie {...movie} />}

        <h3 className={styles.addInfo}>Additional information </h3>

        <Link
          to={{
            pathname: `/movies/${match.params.movieId}/cast`,

            state: {
              from: { ...location, search },
            },
          }}
          className={styles.cast}
        >
          Cast
        </Link>

        <Route path="/movies/:movieId/cast" component={WrappedCast} />

        <Link
          to={{
            pathname: `/movies/${match.params.movieId}/review`,

            state: {
              from: { ...location, search },
            },
          }}
          className={styles.review}
        >
          Review
        </Link>

        <Route path="/movies/:movieId/review" component={WrappedReview} />
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
