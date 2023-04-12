import React from 'react';
import './Item.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'

const Item = ({item}) => {
    console.log(item);
    const{img,post,name,location,salary}=item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h3>{post}</h3>
            <h4>{name}</h4>
            <div className='flexy'>
                <h4> 
                <FontAwesomeIcon icon={faLocationDot} />
                {location}</h4>
                <h4 className='flex'>
                <FontAwesomeIcon icon={faDollar} />
                    {salary}</h4>
            </div>
            <button className='
            btn-view'>
                View Details</button>
                
        </div>
    );
};

export default Item;