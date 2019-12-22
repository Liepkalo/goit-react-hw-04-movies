import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { fetchSearchMovie } from '../../services/service';

import MoviesList from './MoviesList/MoviesList';

class MoviesPage extends Component {
  state = { query: '', movies: [] };

  componentDidMount() {
    const { search } = this.props.location;

    if (search) {
      fetchSearchMovie(search.slice(7))
        .then(alldata => alldata.data)

        .then(data => data.results)

        .then(movies => this.setState({ movies }));
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    const { query } = this.state;

    const { location, history } = this.props;

    e.preventDefault();

    this.setState({ query: '' });

    fetchSearchMovie(query)
      .then(alldata => alldata.data)

      .then(data => data.results)

      .then(movies => this.setState({ movies }));

    history.push({
      ...location,

      search: `query=${query}`,
    });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            value={query}
            onChange={this.handleChange}
          />

          <button type="submit">Search</button>
        </form>

        <MoviesList movies={movies} />
      </>
    );
  }
}

export default withRouter(MoviesPage);
