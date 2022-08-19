
import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const categoryContext = createContext()

function App() {
  const  [category ,setCategory]= useState(0)
  return (
    <categoryContext.Provider value={[category ,setCategory]}>
      <h2>cetagori {category}</h2>
     <Home></Home>
     <Header></Header>
     <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
