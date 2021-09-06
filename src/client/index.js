import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from '../layout';
import {Provider} from 'react-redux';
import {getClientStore} from '../redux';

const App = () => (
  <Provider store={getClientStore()}>
    <Router>
      <Layout />
    </Router>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector('#root'));