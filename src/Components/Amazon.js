import React, { useState } from 'react'
import Cards from './Card';
import list from '../Data';
import  '../styles/Amazon.css';
const Amazon = (handleClick ) => {
  
 return (
    <section>
    { list.map((item) =>(
      <Cards key= {item.id} item={item} handleClick={handleClick}/>
      ))}
     </section>
  )
}

export default Amazon