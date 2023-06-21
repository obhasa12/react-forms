import { useState } from "react";

function UsernameForm() {
    const [username, setUsername] = useState("timmy")
    const updateUsername =(e) => {
        setUsername(e.target.value)
    }
    return (  
        <div className="username-form">
            <label htmlFor="username">Username : </label>
            <input type="text" placeholder="username" value={username}
            onChange={updateUsername} id="username"/>
            <button>Submit</button>
        </div>
    );
}

export default UsernameForm;