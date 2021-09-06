import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../components/Home';
import Counter from '../components/Counter';

export default (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/counter" component={Counter} />
  </>
);