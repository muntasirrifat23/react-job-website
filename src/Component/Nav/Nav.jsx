import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div className='nav'>
            <div>
                <h1>Bangali_Job</h1>
            </div>
            <div className='anchor'>
                <a href="/home">Home</a>
                <a href="/statistics">Statistics</a>
                <a href="/applied">Applied Jobs</a>
                <a href="/blog">blog</a>
            </div>
            <div>
                <button className='btn-start'>Start Applying</button>
            </div>
        </div>
    );
};

export default Nav;