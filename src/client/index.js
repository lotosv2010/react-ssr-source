import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from '../layout';

const App = () => (
  <Router>
    <Layout />
  </Router>
);

ReactDOM.hydrate(<App />, document.querySelector('#root'));