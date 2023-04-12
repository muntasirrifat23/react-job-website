import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='nav'>
            <div>
                <h1>Bangali_Job</h1>
            </div>
            <div className='anchor'>
                <Link to='/'>Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button className='btn-start'>Start Applying</button>
            </div>
        </div>
    );
};

export default Nav;