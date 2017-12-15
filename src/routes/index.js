import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../components/login';
import Dashboard from '../components/dashboard';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={ Login } />
      <Route path="/dashboard" exact component={ Dashboard } />
    </div>
  </BrowserRouter>
);
