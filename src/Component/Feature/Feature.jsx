import React, { useEffect, useState } from 'react';
import './Feature.css'
import Item from '../Item/Item';
const Feature = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (

        <div className='feature'>
            <div className='feature-title'>
                <h1>Feature Job</h1>
                <h4 className='des'>Find your best job for better career</h4>
            </div>
            <div className='feature-d'>
                <div className='f-display'>
                    {
                        items.map(item => <Item
                            key={item.id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>

            </div>
            <div className='see-all'>
                <button className='btn-see'>
                    See All Jobs
                </button>
            </div>

        </div>
    );
};

export default Feature;