import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';
import SignupHandler from './components/Signup.js';

class App extends React.Component{
  render() {
    return (
      <div className="nav">
        <h1>Hello world!</h1>
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
          <footer>
            <ul>
                <li>Click me</li>
                <li>A link</li>
                <li>Another</li>
            </ul>
          </footer>

        <RouteHandler/>
      </div>
    );
  }
}

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="signup" path="/signup" handler={SignupHandler} />
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});
