import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={ Login } />
      <Route path="/dashboard" exact component={ Dashboard } />
    </div>
  </BrowserRouter>
);
