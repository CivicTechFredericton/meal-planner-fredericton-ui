import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    banner:{
        position: 'absolute',
        top: '0',
        width:'100%'
    }
}));

const banner = require('../assets/banner.jpg');

const Home = (props) => {
    const classes = useStyles(props);
    return (
        <>
            <div>
            <img src={banner} alt="" className={classes.banner} />
            </div>
        </>
    )
}

export default Home;
