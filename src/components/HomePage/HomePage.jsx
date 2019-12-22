import React, { Component } from 'react';

import styles from './HomePage.module.css';

import { fetchMovies } from '../../services/service';

import MoviesList from '../MoviesPage/MoviesList/MoviesList';

class HomePage extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetchMovies()
      .then(alldata => alldata.data)

      .then(data => data.results)

      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1 className={styles.title}>Trending today</h1>

        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;
