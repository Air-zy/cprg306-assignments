'use client';

import { useState } from "react";
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    // spread so no mutate the original
    const sorted = [...items].sort((a, b) =>
        sortBy === 'name'
            ? a.name.localeCompare(b.name)
            : a.category.localeCompare(b.category) || a.name.localeCompare(b.name) // not ssure about this part...?? cant get it to be the same as example
    );

    // same class as one used in example
    const btn = (val, label) => (
        <button
            onClick={() => setSortBy(val)}
            className={`${sortBy === val ? 'bg-orange-500' : 'bg-orange-700'} p-1 m-2 w-28`}
        >
            {label}
        </button>
    );

    return (
        <div>
            <div>
                <label>Sort by: </label>
                {btn('name', 'Name')}
                {btn('category', 'Category')}
            </div>

            <ul>
                {sorted.map(({ id, name, quantity, category }) => (
                    <Item key={id} name={name} quantity={quantity} category={category} />
                ))}
            </ul>
        </div>
    );
}
