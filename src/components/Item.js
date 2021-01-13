import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function addToCart() {
    // console.log("Add to Cart")
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={inCart ? "add" : "remove"}>{inCart ? "Remove Item" : "Add Item"}</button>
    </li>
  );
}

export default Item;
