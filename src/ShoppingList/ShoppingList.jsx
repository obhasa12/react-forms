import { useState } from "react";
import { v4 as uuid } from "uuid"
import ShoppingListForm from "./ShoppingListForm";
import ValidateShoppingListForm from "./ValidateShoppingListForm";

function ShoppingList() {
    const [items, setItems] = useState([
        {id:uuid(), product: "Bananas", quantity: 8},
        {id:uuid(), product: "Eggs", quantity: 12},
    ]);

    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems,  {...item, id: uuid()}]
        })
    }

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
            <ValidateShoppingListForm addItem={addItem}/> 
        </div>
    );
}

export default ShoppingList;