
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserMethods } from "../../lib/users.js";
import './editProfile.css'

function EditProfile() {
    const [user, setUser] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {
        console.log('IN EDIT PROFILE');
        const id = localStorage.getItem('UserId');
        const user = UserMethods.GetUserById(id)
        console.log(user);
        if (user) {
            setUser(user);
        }
        else {
            Navigate('/login');
        }
    }, [user])

    return (
        <div>
            {user && (<div className='containerEdit'>
                <div className='userData'>
                    <p>username:</p>
                    <textarea className='usernameText' name='uname' rows={Math.ceil(user.username.length / 194)} wrap='soft' defaultValue={user.username}></textarea>
                    <p>bio:</p>
                    <textarea className='bioText' name='bio' rows={Math.ceil(user.bio.length / 194)} wrap='soft' defaultValue={user.bio}></textarea>
                    <p>additional information: </p>
                    <textarea className='additionalText' name='additional' rows={Math.ceil(user.additionalinfo.length / 194)} wrap='soft' defaultValue={user.additionalinfo}></textarea>
                    <div className='location'>
                        <div>
                            <p>postcode:</p>
                            <textarea name='postcode' defaultValue={user.postcode} rows='1' cols='10' />
                        </div>
                        <div>
                            <p>x-coordinate:</p>
                            <textarea name='xcoord' defaultValue={user.coordinates[1]} rows='1' cols='10' />
                        </div>
                        <div>
                            <p>y-coordinate:</p>
                            <textarea name='ycoord' defaultValue={user.coordinates[0]} rows='1' cols='10' />
                        </div>
                    </div>
                    <p>images: </p>
                    <textarea className='images' name='additional' rows='4' wrap='soft' defaultValue={user.images.map((image) => image + '\n').join('')}></textarea>
                </div>
                <div className='save'>
                    <button className='save' onclick='updateProfile()'>Save changes</button>
                </div>
            </div>)}
        </div>
    )

}

export default EditProfile