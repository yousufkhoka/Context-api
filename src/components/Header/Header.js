import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
  const [category ,setCategory] = useContext(categoryContext)
    return (
        <div>
            <h1>this is Header {category} </h1>
            <button onClick={()=>setCategory('Leptop')}>Leptop</button>
            <button onClick={()=>setCategory('Mobail')}>Mobail</button>
            <button onClick={()=>setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;