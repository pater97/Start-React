// importazione 
import React from 'react'
// variabili
// componente
const Product = (props) => {
    const {img,nome,prezzo,children} = props;
  return (
    <div className='card'>
        <img src= {img} alt="" />
        <h2>{nome}</h2>
        <h6>{prezzo}</h6>
        <>{children}</>
    </div>
  )
}


export default Product