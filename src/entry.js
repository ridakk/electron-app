require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

const App = React.createClass({
  render: function() {
    return <div > < div className = "tech electron" > Electron < /div> + <div className="tech react">React</div > + < div className = "tech sass" > Sass < /div></div > ;
  }
});

ReactDOM.render( < App / > , document.getElementById('react-root'));
