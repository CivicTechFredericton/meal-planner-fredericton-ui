import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageCarousel from "./ImageCarousel";

const Explanation = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {''}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    margin: theme.spacing(4),
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = (props) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
          position="absolute"
          top={40}
          zIndex="modal"
        >
          <ImageCarousel />
        </Grid>
      <Grid item xs={12} sm={12} md={6} >
        <Typography
          component="div"
          variant="body1"
          style={{ height: 100, width: '100%', position: 'relative' }}
        >
        <Box
          position="relative"
          top={0}
          zIndex="tooltip"
        >
        <div style={{ padding: 150}}>
            <div>
            <Typography variant="body2" color="textSecondary" align="center">
              <h1 style={{fontSize: 50}}>Looking for a healthier diet?</h1>
              <p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
            </Typography> 
              <Button
                type="submit"
                fullWidth={false}
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                FIND OUT MORE
              </Button>
            </div>
          </div>
          </Box>
          </Typography>
          <Box
            position="relative"
            left={800}
            top={0}
            zIndex="tooltip"
          >
          <Grid item xs={12} sm={8} component={Paper} elevation={10}>
          <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="textPrimary"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="textPrimary"
              />
              <Box mt={5}>
                <Explanation />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
            </Grid>
          </Box>
        </Grid>
    </Grid>
  );
}

export default Login;