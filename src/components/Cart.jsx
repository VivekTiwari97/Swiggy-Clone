import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import { useState, useEffect } from "react";
import Cartitem from "./Cartitem";
import CartBill from "./CartBill";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  console.log("cartitem", cartItem);
  const [SumOfItem, setSumItem] = useState();

  useEffect(() => {
    let calculatedTotal = 0;
    cartItem.forEach((item) => {
      calculatedTotal += item.card.info.price || item.card.info.defaultPrice;
    });

    setSumItem(calculatedTotal);
  }, [cartItem]);

  const handleonClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="cartpage">
        <div className="cart_material">
          {cartItem.map((items) => (
            <Cartitem key={items.id} allitem={items} />
            
          ))}
        </div>
        <div>
            {cartItem.length === 0 && (
              <div>
                <img
                  src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
                  alt=""
                  width={"650px"}
                />
                <h3 style={{marginLeft:"220px"}}>
                  Your Cart is <span style={{ color: "red" }}>Empty</span>
                </h3>
                {/* <button className="gotoHome">Go TO HOME PAGE</button> */}
                <Link to="/" ><button className="gotoHome">Go TO HOME PAGE</button></Link>
              </div>
            )}
          </div>
        <div className="bill-card">
          <h2>Bill</h2>
          <button className="clear_button" onClick={handleonClearCart}>Clear cart</button>
          {cartItem.map((billitem) => (
            <CartBill key={billitem.id} billitems={billitem} />
          ))}
          <div className="tottalAmoutn">
            <h5>Total Amount : </h5>
            <hr />
            <p>₹{SumOfItem / 100}</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Cart;


