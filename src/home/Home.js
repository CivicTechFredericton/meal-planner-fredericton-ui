import React from 'react';
import Footer from "../core/footer/Footer";

const temp = ["Dan", "Sam", "Nancy"];

const func = (array) => {
    return array.map( result => {
        return (
             <span>{ result + " "}</span>
        )
    })
}
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
            { func(temp)}
          <Footer>
          </Footer>
        </>
    )
}

export default Home;
