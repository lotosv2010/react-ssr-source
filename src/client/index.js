import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getClientStore} from '../redux';
import {renderRoutes} from 'react-router-config';
import routes from '../routes';

const App = () => (
  <Provider store={getClientStore()}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector('#root'));