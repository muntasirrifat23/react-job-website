import React from 'react';
import './Item.css'
const Item = ({item}) => {
    console.log(item);
    const{img,post,name,location,salary}=item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h3>{post}</h3>
            <h4>{name}</h4>
            <div className='flexy'>
                <h4>{location}</h4>
                <h4 className='flex'>{salary}</h4>
            </div>
        </div>
    );
};

export default Item;