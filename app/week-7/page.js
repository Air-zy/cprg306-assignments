'use client';

import { useState } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(() => itemsData);
    const makeid = () => Math.random();

    const handleAddItem = (item) => {
        const newItem = { id: item.id || makeid(), ...item };
        setItems((prev) => [...prev, newItem]);
    };


    return (
        <main className="bg-slate-950">
            <div className="m-4">
                <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}
