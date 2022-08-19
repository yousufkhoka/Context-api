import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
const allProducts = [
    {name:'Dell', category:'leptop'},{name:'ph', category:'leptop'},{name:'Asus', category:'leptop'},
    {name:'Samsumg', category:'mobail'},{name:'Nokia', category:'mobail'},{name:'apple', category:'mobail'},
    {name:'Ceanon', category:'camera'},{name:'Nikkon', category:'camera'},{name:'sony', category:'camera'}
]

const Categories = () => {
    const [category] = useContext(categoryContext)
    const [product , setProduct] = useState([])
    useEffect(()=>{
      const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase() )
    setProduct(matchProducts)
    },[category])
    
    return (
        <div>
            <h2>select your Category</h2>
            {
                product.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
            
        </div>
    );
};

export default Categories;