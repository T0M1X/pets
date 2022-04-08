import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserMethods } from "../../lib/users.js";

function EditProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const Navigate=useNavigate();

    useEffect(() => {
        const id = localStorage.getItem('UserId');
        const user = UserMethods.GetUserById(id)
        if (user) {
            setUser(user);
        }
        else{
            Navigate('/login');
        }
    }, [])

    return (
        <div>{user && <p>{user.username}</p>}</div>
    )

}

export default EditProfile