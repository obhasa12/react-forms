import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {
    const [items, setItems] = useState([
        {id:1, product: "Bananas", quantity: 8},
        {id:2, product: "Eggs", quantity: 12},
    ]);

    // const addItem = (item) => {
    //     setItems((item) => {
    //         return [...items,  {...item, id: 9}]
    //     })
    // }

    return (  
        <div className="shopping-list">
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => {
                    return(
                        <li key={item.id}>{item.product} - {item.quantity}</li>
                    )
                })}
            </ul>
            <ShoppingListForm /> 
        </div>
    );
}

export default ShoppingList;