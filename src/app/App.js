import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../home/Home";
import Header from '../core/Header';


const App = (props) => {

  return (
    <>
    
      <Header />
      <Switch>

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
