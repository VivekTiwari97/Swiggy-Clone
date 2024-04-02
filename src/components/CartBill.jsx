import React from 'react'

const CartBill = ({billitems}) => {
    const {name,price,defaultPrice}= billitems.card.info

  return (
    <>
    <div cartBill>
        
        <p><span>{name} {"₹"} {price/100 || defaultPrice/100}</span></p>
        <hr />
        {/* <span><p>{"₹"}{price/100 || defaultPrice}</p></span> */}
    </div>
    </>
  )
}

export default CartBill;