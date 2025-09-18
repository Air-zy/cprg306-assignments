export default function Item({name, quantity, category}) {
    // i took thee class names from example page
    return (
        <li className="border p-2 rounded">
            <p className="font-medium">{name} </p>
            <p>Quantity: {quantity}</p>
            <p className="capitalize">Category: {category}</p>
        </li>
    )
}