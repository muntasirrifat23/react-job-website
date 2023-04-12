import React from 'react';
import Nav from './Nav/Nav';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;