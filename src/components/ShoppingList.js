import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  function handleCatChange(e) {
    console.log("Cat Change", e.target.value)
    setSelectedCategory(e.target.value)
  }

  const itemsShown = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCatChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsShown.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
