import React, { useState } from "react";

function Item({ name, category }) {

const [inCart, setCart] = useState(false)
const liStyle = inCart ? "in-cart" : ""
const buttonColor = inCart ? "remove" : "add"

function handleAddClick(){
setCart(!inCart)
}

  return (
    <li className={liStyle}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonColor} onClick={handleAddClick}>{inCart? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
