import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './comps/layout/Navbar';
import Alerts from './comps/layout/Alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './comps/auth/Register';
import Privacy from './comps/pages/Privacy';
import Done from './comps/pages/Done';

import './App.css';

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Navbar />
          <Alerts />

          <Switch>
            <Route exact path='/' component={Register}></Route>
            <Route exact path='/privacy' component={Privacy}></Route>
            <Route exact path='/done' component={Done}></Route>
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
