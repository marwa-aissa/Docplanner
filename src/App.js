import React from 'react';

import './App.css';
import Nav from './nav'
import Header from './header'
import Presentation from './presentation'
import Services from './services'
import Card from './card'
import Item from './item'
import Company from './company'
import image from  './warsaw.png'
import Itemcard from './itemcard';

let TheItem=[
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'}]


function App() {
  return (
    <div className="App ">
      <Nav/>
      <Header/>
      <Presentation/>
      <Services/>
      <Company/>
      <Card/>
      <Itemcard/>
      
     
      
      <div className='organisation'>

      <Item  itemslist={TheItem}/>

        
      </div>
    </div>





  );
}

export default App;
