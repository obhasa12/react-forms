import { useState } from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const updateFirstName =(e) => {
        setFirstName(e.target.value)
    };
    const updateLastName =(e) => {
        setLastName(e.target.value)
    };
    return (  
        <div className="signup-form">
            <label htmlFor="firstname">First Name : </label>
            <input type="text" placeholder="firstname" value={firstName}
            onChange={updateFirstName} id="firstname"/>

            <label htmlFor="lastname">Last Name : </label>
            <input type="text" placeholder="lastname" value={lastName}
            onChange={updateLastName} id="lastname"/>
             
            <button>Submit</button>
        </div>
    );
}

export default SignupForm;