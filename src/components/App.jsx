import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav/Nav';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import MovieDetailsPage from './MoviesPage/MoviesList/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect from="/" to="/" />
      </Switch>
    </div>
  );
}

export default App;
