import React from 'react';


const CategoryDetail = (props) => {
    const { name } = props.product;
    return (
        <div>
            <h3>seclect your product : {name}</h3>
        </div>
    );
};

export default CategoryDetail;