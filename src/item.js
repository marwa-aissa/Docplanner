import React, { Component } from 'react';

function Items (props){
const itemslist=props.itemslist
let itemshtml=[]
itemshtml=itemslist.map((itm,i)=>
<div className='card my-2'>
 <div key={i} className="itm " style={{padding:'15px'}}>
<img src={itm.image}/>
   <div className="horizentale ">
  <p> {itm.name}</p>
  <button type='button' class='btn btn primary d-inline my-2'></button>
  </div>
</div>
</div>
)
return itemshtml
}

export default Items;