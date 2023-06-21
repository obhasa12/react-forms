import { useState } from "react";

function BetterSignupForm() {
    const [formData, setFormData]= useState({firstName: "", lastName: "", password:""})

    const handleChange = (e) => {
        const nameTarget = e.target.name;
        const valueTarget = e.target.value;
        setFormData((data) => {
            data[nameTarget] = valueTarget;
            return{...data};
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (  
        <div className="signup-form">
            <label htmlFor="firstname">First Name : </label>
            <input type="text" placeholder="first name" value={formData.firstName}
            onChange={handleChange} id="firstname" name="firstName"/>

            <label htmlFor="lastname">Last Name : </label>
            <input type="text" placeholder="last name" value={formData.lastName}
            onChange={handleChange} id="lastname" name="lastName"/>
             
            <label htmlFor="password">Password : </label>
            <input type="password" placeholder="password" value={formData.password}
            onChange={handleChange} id="password" name="password"/>

            <button onClick={handleSubmit} >Submit</button>
        </div>
    );
}

export default BetterSignupForm;