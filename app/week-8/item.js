export default function Item({ name, quantity, category, onSelect }) {
    // took the styles from the example
    return (
        <li onClick={onSelect} className="p-2 m-4 bg-slate-900 max-w-sm cursor-pointer hover:bg-slate-700">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="text-sm">
                Buy {quantity} in {category}
            </div>
        </li>
    );
}