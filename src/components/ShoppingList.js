import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter'

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
// selectedCategory = useState()
// setCategory = useState()

function onCategoryChange(e){
  setCategory(e.target.value)
}
const filteredItems = items.filter(item => 
  selectedCategory === "All" || selectedCategory === item.category)

  // function handleChange(e){
  //   setCategory(e.target.value)
  // }

  return (
    <div className="ShoppingList">
      <div className="Filter">
      <Filter onCategoryChange={onCategoryChange}  />
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    
    </div>
  );
}

export default ShoppingList;
