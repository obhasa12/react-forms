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
        console.log("assa")
    }

    return (  
        <form> 
            <h1>Product is: {formData.product} and quantity is : {formData.quantity}</h1>
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
            <button>Add Item</button>
        </form>
    );
}

export default ShoppingListForm;