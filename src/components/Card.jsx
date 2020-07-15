import React from "react";

import avatarBart from "../images/bart-avatar.png";
import avatarMilhouse from "../images/milhouse-avatar.png";
import avatarNelson from "../images/nelson-avatar.png";
import avatarMartin from "../images/martin-avatar.png";

import "./styles/Card.css";

const Card = (props) => {

    const avatares = {
        avatarBart,
        avatarMilhouse,
        avatarNelson,
        avatarMartin,
    }

    const {
        email,
        firstName,
        lastName,
        twitter,
        jobTitle,
        avatarUrl,
    } = props.badge;

    return (
        <div className="Card__Container">
            <img
                className="Card__Container--avatar"
                src={avatares[avatarUrl]}
                alt={`${firstName} ${lastName}'s Soul`}
            />
            <div className="Card__Container--text-container">
                <h3>{firstName} {lastName}</h3>
                <div><i>@{twitter}</i></div>
                <div><b>{jobTitle}</b></div>
            </div>
        </div>
    );
}

export default Card;