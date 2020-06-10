import React from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Main from './components/main/Main';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
  );
}

export default App;
