import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../components/Counter';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from '../routes';

const App = () => (
  <Router>
    {routes}
  </Router>
);

ReactDOM.hydrate(<App />, document.querySelector('#root'));