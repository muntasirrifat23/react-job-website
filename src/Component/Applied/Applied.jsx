import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Applied.css'

const Applied = () => {
    return (
        <div>
              <h1 className='applied'>Jobs You Applied</h1>
            <div className='drop'>
            <DropdownButton id="dropdown-basic-button" title="Filter By">
                <Dropdown.Item href="#/action-1" className='q'>Full Time</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className='q'>Remote</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className='q'>Part Time</Dropdown.Item>
            </DropdownButton>
            </div>
        </div>
    );
};

export default Applied;