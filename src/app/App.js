import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import Home from "../home/Home"
import { CreatePlanOptions } from "../plan/CreatePlanOptions";
import CreatePlan, { CreatePlanTable } from "../plan/CreatePlanTable";
import { Grid } from '@material-ui/core';

const App = (props) => {

  return (
    <>

      <Switch>

        <Route
          path='/'
          render={() => (
            <Grid
            item
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
            spacing={2}
          >
              <Grid item xs={4}>  
                <CreatePlanOptions/>
              </Grid>
              <Grid item xs={8}>  
                <CreatePlanTable/>
              </Grid>
            </Grid>
          )}
        />

      </Switch>
    </>
  );
}

export default App;
