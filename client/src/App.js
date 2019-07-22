import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
      <Router addToSavedList={addToSavedList}>
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList}></Movie>} ></Route>
      </Switch>
    </div>
      </Router>
  );
};

export default App;
