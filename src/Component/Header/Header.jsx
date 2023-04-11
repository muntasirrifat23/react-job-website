import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'> 
            <div className='header-title'>
                <h1>Here, Bangali_job</h1>
                <h1>You Can Find</h1>
               <span className='header-h'><h1>Your Job</h1></span>
               <div className='header-des'>
                    <h4>Bangali_job is a database filled with career planning </h4>
                    <h4>resources, job search tools and information about</h4> 
                    <h4>starting your employment journey.</h4>
               </div>
               <button className='btn-get'>Get Started</button>
            </div>
            <div>
                <img src="my.png" alt="" />
            </div>
        </div>
    );
};

export default Header;