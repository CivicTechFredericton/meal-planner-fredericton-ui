import React from 'react';


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
        </>
    )
}

export default Home;
