import React, { useEffect, useState } from "react";
import "./sittersProfile.css";
import Footer from "../Footer.js";
import Header from "../Header.js";
import { useParams } from "react-router-dom";
import sitters from "../../lib/sitters.json";

//pass in sitters.json object as props
const SittersProfile = (props) => {

    let { name } = useParams();
    const [user, setUser] = useState(null);
    const [color, setColor] = useState("green");
    const [bigPicture, setPicture] = useState(null);
    useEffect(() => {
        console.log(name);
        // Find user object with matching name from json
        const sitter = sitters.filter(sitter => sitter.username.toLowerCase() == name)[0];
        setUser(sitter);
    }, []);

    useEffect(() => {
        if (user) {
            const color = "green";
            if (user.rating >= 4) { setColor("rgb(81, 148, 81)") }
            if (user.rating <= 2) { setColor("red") }
            if (user.rating < 4 && user.rating > 2) { setColor("orange") }
        }

    }, [user]);



    return (
        <div>
            {user && (<div className="container">
                <div className="profileHeader">
                    <p>Sitter: {user.username}</p>
                    <div className="rating" style={{ backgroundColor: color }}>
                        <p>  average rating: {user.rating}  </p>
                    </div>
                </div>
                <div><hr className="solid" /></div>
                <div className="userprofile">
                    <img src={user.profilePicture} />
                    <div className="userinfo">
                        <p className="intro"> Hi, I'm {user.username}! &#128021;</p>
                        <p className="profilebio">{user.bio}</p>
                        <p className="subheader">Additional facts about me:</p>
                        <p className="profilebio">{user.additionalinfo}</p>
                        <div className="badges">
                            {user.badges.map((badge) => (
                                <div className="pills"><p> {badge} </p></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div><hr className="solid" /></div>
                <div className="pictureSection">
                    <div className="pictures">
                        <div className="pictureRow">
                            {user.images.map((image) => (
                                <div className="pictureColumn"> <img src={image} onClick={() => { setPicture(image) }} /></div>
                            ))}
                        </div>
                        <div className="bigPicture">
                            {bigPicture && <img src={bigPicture} />}
                        </div>
                    </div>
                    <div className="reviews">
                        <p>reviews go here!</p>
                    </div>
                </div>



            </div>)}

        </div>
    );
}
// {user && ( ) }
//            )
// <div className="container">
//     <div className="item">
//     <img id="profile-pic" src={props["profilePicture"]}></img>
//     </div>
//     <div className="item">
//         <h2>{props["username"]}</h2>
//         <h4><small>rating: </small>{user.rating}</h4>
//         <h4><small>Address: </small>{props["postcode"]}</h4>
//     </div>
// </div>
// <br></br>
// <div className="text">
//     <h2>Bio</h2>
//     <p>{props["bio"]}</p>
// </div>
//     <div className="container">
//         <div className="item">
//             <h2>Preferred Pets</h2>
//             <ul>
//                 <li>
//                     <p>Cats</p>
//                 </li>
//                 <li>
//                     <p>Dogs</p>
//                 </li>
//             </ul>
//         </div>
//         <div className="item">
//             <h2>Services</h2>
//             <ul>
//                 <li>
//                     <p>Sitting: £10/<small>per night</small></p>
//                 </li>
//                 <li>
//                     <p>Walking: £20/<small>per night</small></p>
//                 </li>
//             </ul>
//         </div>
//     </div>
//     <h2>Photos</h2>
//     <div className="row">
//         <div className="column">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjoN4LpW1szNZPAaDmPI9ftlnR1btW73zf9Q&usqp=CAU" alt=""></img>
//         </div>
//     </div>
//     <br></br>
//     <div className="reviews">
//         <h2>Most notable reviews</h2>
//         <hr></hr>
//         <div className="review">
//             <h4>Name: Joe</h4>
//             <h6>Date: 1/4/2022</h6>
//             <h4>Rating: 5</h4>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi sequi nisi vitae veritatis? Consequuntur, unde itaque! Commodi, nihil recusandae.</p>
//             <hr></hr>
//         </div>
//         <small><a href="#">view all reviews</a></small>
//     </div>
// </div>)}
// </>


export default SittersProfile;