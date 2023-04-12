import React from 'react';
import App from '../App';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Catagory from './Catagory/Catagory';
import Feature from './Feature/Feature';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Catagory></Catagory>
            <Feature></Feature>
        </div>
    );
};

export default Home;