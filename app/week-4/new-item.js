"use client";
 
import { useState } from "react";
 
export default function NewItem({name, category}) {
    const [quantity, setQuantity] = useState(2);
    const increment = () => {
        setQuantity(prev => (prev < 20 ? prev + 1 : prev));
    };
  
    const decrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : prev));
    };
  
    // took the styles from the example
    return (
        <main className="flex justify-center w-full">
            <div className="p-2 m-4 bg-white text-white w-36">
                <div className="flex justify-between items-center">
                    <span className="text-black">{quantity}</span>
                    <div className="flex">
                        <button
                            type="button"
                            onClick={decrement}
                            className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
                            disabled={quantity <= 1}
                        >
                            -
                        </button>
                        <button
                            type="button"
                            onClick={increment}
                            className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
                            disabled={quantity >= 20}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}