import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Route, Switch, Redirect } from 'react-router-dom';
//import MenuIcon from '@material-ui/icons/Menu';
import Home from "../home/Home"
import About from "../about/About";
import Login from "../login/Login";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = (props) => {
  const classes = useStyles();
  const [State, setState] = useState({ name: "Dan", address: null})
//setState(...State, {name: "Dan"} )

  return (
    <>


      <Switch>
      <Route
          path='/about'
          render={() => (
            <About/>
          )}
        />

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
