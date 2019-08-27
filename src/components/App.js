import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TopWords from '../containers/words/TopWords';
import Searchable from '../pages/words/Searchable';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/words/:count' component={Searchable} />
        <Route exact path='/' component={TopWords} />
      </Switch>
    </Router>
  );
}
