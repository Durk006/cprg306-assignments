"use client"; // Indicates that this file should be processed on the client-side

import { useState } from 'react'; // Importing the useState hook from React
import NewItem from './new-item'; // Importing the NewItem component
import ItemList from './item-list'; // Importing the ItemList component
import MealIdeas from './meal-ideas'; // Importing the MealIdeas component
import itemsData from './items.json'; // Importing the items data from a JSON file

export default function Page() {
  // Initialize state with items data
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); 

  // Event handler for adding a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Event handler for selecting an item
  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(',')[0] 
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
      .trim(); 
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-slate-900 flex">  
      <div className="w-1/2 p-5">
        <h1 className="text-stone-50 font-semibold text-4xl mb-5">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}


