import { useState } from "react";

function ShoppingListForm({addItem}) {
    const [formData, setFormData]= useState({product: "", quantity: 0})

    const handleChange = (e) => {
        setFormData((data) => {
            return {...data, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product: "", quantity: 0})
    };

    return (  
        <form className="shopping-list-form"> 
            <label htmlFor="product">Product : </label>
            <input 
                type="text" 
                name="product" 
                id="product" 
                placeholder="product name"
                onChange={handleChange}
                value={formData.product}/>

            <label htmlFor="quantity">Quantity : </label>
            <input 
                type="number" 
                name="quantity" 
                id="quantity" 
                placeholder="quantity name"
                onChange={handleChange}
                value={formData.quantity}/>
            <button onClick={handleSubmit} >Add Item</button>
        </form>
    );
}

export default ShoppingListForm;