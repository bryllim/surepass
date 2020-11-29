import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
const Main = props => (
<Switch>
  {/*User might LogIn*/}
  <Route exact path='/' component={App}/>
  <Route exact path='/login' component={Login}/>
</Switch>
);
export default Main;