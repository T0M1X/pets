
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserMethods } from "../../lib/users.js";
import './editProfile.css'

function EditProfile() {
    const [user, setUser] = useState(null);
    const Navigate = useNavigate();
    let updated = false;

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

    const Update = () => {
        let coords = []
        if (!isNaN(parseInt(document.getElementById('ycoord').value)) && !isNaN(parseInt(document.getElementById('xcoord').value))) {
            coords = [ parseInt(document.getElementById('ycoord').value),
                       parseInt(document.getElementById('xcoord').value)]
        }

        console.log(coords)

        let id = user.id;
        let new_user = {
            id: user.id,
            type: user.type,
            username: document.getElementById('uname').value,
            password: user.password,
            postcode: document.getElementById('postcode').value,
            coordinates: coords,
            bio: document.getElementById('bio').value,
            profilePicture: document.getElementById('pfp').value,
            rating: user.rating,
            additionalinfo: document.getElementById('additional').value,
            badges: user.badges,
            images: document.getElementById('images') && (document.getElementById('images').value.split('\n'))
        }

        UserMethods.modifyUser(id, new_user);
        updated = true;
        document.getElementById('state').style.display = "flex";
    };

    return (
        <div>
            {user && (<div className='containerEdit'>
                <div className='userData'>
                    <p>username:</p>
                    <textarea className='usernameText' id='uname' rows={Math.ceil(user.username.length / 194)} wrap='soft' defaultValue={user.username}></textarea>
                    <p>profile picture:</p>
                    <textarea className='pfp' id='pfp' rows={Math.ceil(user.profilePicture?.length / 194)} wrap='soft' defaultValue={user.profilePicture}></textarea>
                    <p>bio:</p>
                    <textarea className='bioText' id='bio' rows={Math.ceil(user.bio.length / 194)} wrap='soft' defaultValue={user.bio}></textarea>
                    <p>additional information: </p>
                    <textarea className='additionalText' id='additional' rows={Math.ceil(user.additionalinfo?.length / 194)} wrap='soft' defaultValue={user.additionalinfo}></textarea>
                    <div className='location'>
                        <div>
                            <p>postcode:</p>
                            <textarea id='postcode' defaultValue={user.postcode} rows='1' cols='10' />
                        </div>
                        <div>
                            <p>x-coordinate:</p>
                            <textarea id='xcoord' defaultValue={user.coordinates && (user.coordinates[1])} rows='1' cols='10' />
                        </div>
                        <div>
                            <p>y-coordinate:</p>
                            <textarea id='ycoord' defaultValue={user.coordinates && (user.coordinates[0])} rows='1' cols='10' />
                        </div>
                    </div>
                    <p>images: </p>
                    <textarea className='images' id='additional' rows='4' wrap='soft' defaultValue={user.images?.map((image) => image + '\n').join('')}></textarea>
                </div>
                <div className='save'>
                    <button className='save' onClick={Update}>Save changes</button>
                </div>
                <div className='state' id='state'><p>Update Successful!</p></div>
                 
            </div>)}
        </div>
    )

}

export default EditProfile