import React from 'react';
import './Popular.css';
import data_product from '../Assests/data';
// Adjust the import statement based on how Item is exported
import { Item } from '../Item/Item'; // or import Item from '../Item/Item'; if it's a default export

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item,i) => {
                return (
                    <Item 
                        key={i} // Use item.id as the key
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price}
                        old_price={item.old_price} 
                    />
                );
            })}
        </div>
    </div>
  );
}