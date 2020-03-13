import React from 'react';
import Footer from "../core/footer/Footer";
import { makeStyles } from '@material-ui/core/styles';
//import banner from '../assets/banner.jpg';
import Login from '../login/Login';



const useStyles = makeStyles(theme => ({
    banner:{
      //  position: 'absolute',
        top: '0',
        width:'100%'
    }
}));

//const banner = require('../assets/banner.jpg');

const Home = (props) => {
    const classes = useStyles(props);
    return (
        <>
           <Login/>
        </>
    )
}

export default Home;
