import React from "react";
import "./ProductCardList.css";

function ProductCardList() { 
return (
      <div className="cart_form">
        <div className="cart_shippingadress">
          <h3 className="lato">SHIPPING ADDRESS</h3>
          <form action="#">
            <input type="text" className="color_text_grey-low" placeholder="Bangladesh" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Postcode / Zip" />
            <button>GET A QUOTE</button>
          </form>
        </div>
        <div className="cart_total__holder">
          <div className="cart_total__p-holder">
          </div>
          <div className="line"></div>
          <div className="cart_total__btn-holder">
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
  );
};
export default ProductCardList;