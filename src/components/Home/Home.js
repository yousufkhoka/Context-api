import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
  const category =  useContext(categoryContext)
    const HomeStyle ={
        border:'3px solid tomato'
    }
    return (
        <div style={HomeStyle}>
            <h1>htis is home {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;