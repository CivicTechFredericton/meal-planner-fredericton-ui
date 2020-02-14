import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Menu from './Menu';



const logo = require('../../Logo.png');

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
      appBar: {
        position: 'relative',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey['100']}`,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingTop: 10,
        paddingBottom:10,
      },
      inline: {
        display: 'inline'
      },
      flex: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }
      },
      link: {
        textDecoration: 'none',
        color: '#ffffff'
      },
      productLogo: {
        display: 'inline-block',
        marginLeft: 25,
        paddingLeft: 24,
        [theme.breakpoints.up('md')]: {
          paddingTop: '0.8em'
        }
      },
      tagline: {
        display: 'inline-block',
        marginLeft: 10,
        [theme.breakpoints.up('md')]: {
          paddingTop: '0.8em'
        }
      },
      iconContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'block'
        }
      },
      iconButton: {
        float: 'right'
      },
      tabContainer: {
        marginLeft: 32,
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      },
      tabItem: {
        paddingTop: 20,
        paddingBottom: 20,
        minWidth: 'auto'
      }
  }));


const Header = (props) => {
    const styles = useStyles(props);

    return (<div className={styles.root} ><AppBar position="absolute" className={styles.appBar}>
        <Toolbar>
          <Grid container spacing={24} alignItems="baseline">
              <Grid item xs={12} className={styles.flex}>
                  <div className={styles.inline}>
                    <Typography variant="headline" color="inherit" noWrap>
                      <Link to='/' className={styles.link}>
                        <img width={159} src={logo} alt="" className={styles.productLogo}/>
                      </Link>
                    </Typography>
                  </div>
                  
                    <React.Fragment>
                      <div className={styles.productLogo}>
                        <Typography>
                          A material UI Template
                        </Typography>
                      </div>
                      <div className={styles.iconContainer}>
                        <IconButton className={styles.iconButton} color="inherit" aria-label="Menu">
                          <MenuIcon />
                        </IconButton>
                      </div>
                      <div className={styles.tabContainer}>
                        
                        <Tabs
                          indicatorColor="primary"
                          textColor="primary"
                        >
                          <Tab label="Home" />
                          <Tab label="About Us" />
                          <Tab label="Pages" />
                          <Tab label="News" />
                          <Tab label="Contact" />
                        </Tabs>
                      </div>
                    </React.Fragment>
                  
              </Grid>
            </Grid>

        </Toolbar>
      </AppBar>
      </div>
    )
}

export default Header;