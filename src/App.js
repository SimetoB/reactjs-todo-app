import React from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
  );
}

export default App;
