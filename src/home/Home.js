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

const Home = (props) => {
    return (
        <>
            <div>
                Home
            </div>
            { func(temp)}
          <Footer>
          </Footer>
        </>
    )
}

export default Home;
