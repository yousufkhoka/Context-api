import React, {  useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category ,setCategory] = useContext(categoryContext)
    return (
        <div>
            <h1>this is shipment</h1>
            <button onClick={()=>setCategory(category + 1)}>Increment 2</button>
        </div>
    );
};

export default Shipment;