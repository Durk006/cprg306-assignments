'use client'; // Indicates that this file should be processed on the client-side
import { useState } from 'react'; // Importing the useState hook from React
import Item from './item'; // Importing the Item component
import items from './items.json'; // Importing the items data from a JSON file

export default function ItemList() {
  // State variable to track the sorting criteria (either 'name', 'category', or 'group')
  const [sortBy, setSortBy] = useState('name');

  // Sorting the items array based on the sortBy state variable
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name); // Sorting by name
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category); // Sort by category
    }
  });

  // Grouping the items by their category
  const groupedItems = items.reduce((groups, item) => {
    const group = groups[item.category] || []; // Get the group for the current category, or create a new one
    group.push(item); // Add the current item to its category group
    groups[item.category] = group; // Update the groups object with the new group
    return groups; // Return the updated groups object
  }, {});

  // Sorting the groups and the items within each group
  Object.keys(groupedItems).forEach((category) => {
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)); // Sorting items within each category by name
  });

  return (
    <div>
      <div className="p-2 m-2 text-l capitalize text-stone-50 ">
        {' '}
        Sort By:
        <button
          className={`p-1 m-2 w-28 square-lg  ${
            sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'
          }`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`p-1 m-2 w-28 square-lg  ${
            sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'
          }`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
        <button
          className={`p-1 m-2 w-32 square-lg  ${
            sortBy === 'group' ? 'bg-orange-500' : 'bg-orange-700'
          }`}
          onClick={() => setSortBy('group')}
        >
          Grouped Category
        </button>
      </div>

      {sortBy === 'group' ? (
        // If sorted by group, display grouped items
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category}>
              <h1 className="text-lg ml-4 capitalize text-white ">
                {category}
              </h1>
              <ul>
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))
      ) : (
        // If not grouped, display sorted items
        <ul className="text-xl text-stone-50">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
