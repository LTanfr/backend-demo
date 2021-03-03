import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoutes } from './routes';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Switch>
        {
          adminRoutes.map(route => {
            return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps => {
              return <route.component {...routeProps} />
            }} />
          })
        }
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
