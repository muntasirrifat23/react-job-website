import React from 'react';
import './Catagory.css';
const Catagory = () => {
    return (
        <div className='job'>
            <div>
                <h1>Jobs Category List</h1>
                <h4>See how Many Jobs Are Available Now</h4>
            </div>

            <div className='icon'>
                <div  className='header-job'>
                    <img src="customers.png" alt="" />
                    <h3>Web developer</h3>
                    <p>139 Jobs Available</p>
                </div>
                <div  className='header-job'>
                    <img src="email.png" alt="" />
                    <h3>App developer</h3>
                    <p>120 Jobs Available</p>
                </div>
                <div  className='header-job'>
                    <img src="projects.png" alt="" />
                    <h3>Software Engineer</h3>
                    <p>230 Jobs Available</p>
                </div>
                <div  className='header-job'>
                    <img src="ribon.png" alt="" />
                    <h3>Network Engineer</h3>
                    <p>320 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Catagory;