import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "../home/Home"

const App = (props) => {

  return (
    <>

      <Switch>

        <Route
          path='/login'
          render={() => (
            <Login/>
          )}
        />

        <Route
          path='/'
          render={() => (
            <Home/>
          )}
        />

      </Switch>
    </>
  );
}

export default App;
