import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserMethods } from "../../lib/users.js";
import './editProfile.css'

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
        <div className='containerEdit'>
            <p>username:</p>
            <input></input>
            <p>bio:</p>
            <input></input>
            <p>additional information: </p>
            <input></input>
        </div>
    )

}

export default EditProfile