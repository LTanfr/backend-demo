import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { mainRoutes } from './routes';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/admin" render={routeProps => <App {...routeProps} />} />
        {
          mainRoutes.map(route => {
            return <Route key={route.path} {...route} /> 
          })
        }
        <Redirect to="/404" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


