'use client';

import { useState } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
    const [items, setItems] = useState(() => itemsData);
    const [selectedItem, setSelectedItem] = useState("");
    const makeid = () => Math.random();

    const handleAddItem = (item) => {
        const newItem = { id: item.id || makeid(), ...item };
        setItems((prev) => [...prev, newItem]);
    };

    const handleItemSelect = (item) => {
        //alert(`selected item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);
        const itemName = item.name.replace(/[^a-zA-Z0-9]/g, '');
        setSelectedItem(itemName);
    };


    return (
        <main className="bg-slate-950">
            <div className="m-4">
                <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItem} />
        </main>
    );
}
