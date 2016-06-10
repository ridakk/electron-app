import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/home';

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}/>
  </Router>, document.getElementById('app')
);
