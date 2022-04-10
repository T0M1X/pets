import React, { useEffect, useState } from "react";
import "./sittersProfile.css";
import { useParams, Link } from "react-router-dom";
import { sitters } from "../../lib/Sitters";
import {Reviews} from "../../lib/review";
import Review from "./Review";

const SittersProfile = (props) => {
    let { name } = useParams();
    const [user, setUser] = useState(null);
    const [color, setColor] = useState("green");
    const [bigPicture, setPicture] = useState(null);
    const review = Reviews.filter(reviews => reviews.id === sitters.filter(sitter => sitter.username.toLowerCase() == name.toLowerCase())[0].id);
    useEffect(() => {
        console.log(name);
        // Find user object with matching name
        const sitter = sitters.filter(sitter => sitter.username.toLowerCase() == name.toLowerCase())[0];
        const review = Reviews.filter(reviews => reviews.id === sitter.id);
        setUser(sitter);
    }, []);

    useEffect(() => {
        if (user) {
            const color = "green";
            if (user.rating >= 4) { setColor("rgb(81, 148, 81)") }
            if (user.rating <= 2) { setColor("red") }
            if (user.rating < 4 && user.rating > 2) { setColor("orange") }

            if (user.images) { setPicture(user.images[0]) }
        }

    }, [user]);

    return (
        <div>
            {user && (<div className="containerProfile">
                <div className="profileHeader">
                    <img src={user.profilePicture} />
                    <p>{user.username}</p>
                    <div className="satisfaction">
                        {[...Array(Math.round(user.rating))].map(() => (
                            <img src="https://cdn-icons-png.flaticon.com/512/786/786432.png" />
                        )
                        )}
                    </div>

                    <div className="sub">
                        <p>rating: {user.rating}/5</p>
                    </div>
                    <div className='prices'>
                        <p>walking price: {user.walkprice}/1h</p>
                        <p>sitting price: {user.sitprice}/night</p>
                        <div className='makeBooking'>
                            <Link to='/makeBooking'>
                                <div className="pills"><p>Book me!</p></div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="line" />
                <div classname="infocontainer">
                    <div className="userInfo">
                        <div className="uintro"><p> Hi, I'm {user.username}! &#128021;</p></div>
                        <div className="profilebio"><p>{user.bio}</p></div>
                        <div className="subheader"><p>Additional facts about me:</p></div>
                        <div className="profilebio"><p>{user.additionalinfo}</p></div>
                    </div>
                    <div className="badges">
                        {user.badges?.map((badge) => (
                            <div className="pills"><p> {badge} </p></div>
                        ))}
                    </div>
                    <div className="pictureSection">
                        <div className="introPictures"><p>Photos from {user.username}'s sittings &#128247;:</p></div>
                        <div className="pictures">
                            <div className="pictureColumn">
                                {user.images?.map((image) => (
                                    <div className="pictureRow"> <img src={image} onClick={() => { setPicture(image) }} /></div>
                                ))}
                            </div>
                            <div className="bigPicture">
                                {bigPicture && <img src={bigPicture} />}
                            </div>
                        </div>
                        {!user.images && <div className="profilebio"><p>This user has not supplied us with any pictures yet! </p></div>}
                    </div>
                </div>
            </div>)}

            <div className="R-container">
                <div className="Reviews">
                    {review[0] && ((review[0].review).map(review => < Review review={review} />))}
                </div>
            </div>

        </div>
    );
}

export default SittersProfile;