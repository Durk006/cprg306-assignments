"use client"

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from "./items.json";


export default function Page() {
  // Initialize state with items data
  const [items, setItems] = useState(ItemData);

    // Event handler for adding a new item
    const AddItem = (newItem) => {
      setItems([...items, newItem]);
    };

  return (
    <main className = "bg-slate-900" >
      <h1 className = "text-stone-50 font-semibold text-4xl p-5">Shopping List</h1>
      <NewItem onAddItem = {AddItem} />
      <ItemList items = {items} />
    </main>
  );
}






















