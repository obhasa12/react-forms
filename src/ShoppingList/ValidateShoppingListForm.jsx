import { useState } from "react";

function ValidateShoppingListForm({addItem}) {
    const [formData, setFormData]= useState({product: "", quantity: 0})
    const [productValid, setProductValid] = useState(false);

    const validate = (product) => {
        if(product.length === 0){
            setProductValid(false)
        }else{
            setProductValid(true)
        }
    };

    const handleChange = (e) => {
        if(e.target.name === "product"){
            validate(e.target.value);
        }
        setFormData((data) => {
            return {...data, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(productValid){
        addItem(formData);
        setFormData({product: "", quantity: 0})
        }
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
            {!productValid && <p style={{color: "red"}}>Product name cannot be empty</p>}

            <label htmlFor="quantity">Quantity : </label>
            <input 
                type="number" 
                name="quantity" 
                id="quantity" 
                placeholder="quantity name"
                onChange={handleChange}
                value={formData.quantity}/>
            <button  disabled={!productValid} onClick={handleSubmit} >Add Item</button>
        </form>
    );
}

export default ValidateShoppingListForm;