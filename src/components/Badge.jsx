import React from "react";

import "./styles/Badge.css";

import horizontalLogoImage from "../images/kwf-hor-logo.png";
import circleLogoImage from "../images/kwf-circle-logo.png";

const Badge = (props) => {

    const { firstName, lastName, email, jobTitle, twitter } = props.formData;

    return (
        <div className="Badge">
            <div className="BadgeHeader">
                <img src={horizontalLogoImage} alt="World's Fair Logo" />
            </div>
            <div className="BadgeBody">
                <div className="BadgeBody__main-container">
                    <img
                        className="BadgeBody__main-container--Avatar"
                        src={email ? "http://2.gravatar.com/avatar/8c1891a17fceee9a6c145a8e9fea8be4?s=500" : circleLogoImage}
                        alt="User Photo"
                    />
                    <h1 className="BadgeBody__main-container--UserName">
                        {firstName || <i>Nombre/s</i>}
                        <br />
                        {lastName || <i>Apellido/s</i>}
                    </h1>
                </div>
                <div className="BadgeBody__second-container">
                    <h3>
                        {jobTitle || <i>Ocupación</i>}
                    </h3>
                    <p>
                        {twitter ? `@${twitter}` : <i>@Twitter</i>}
                    </p>
                </div>
            </div>
            <div className="BadgeFooter">
                <p>#KnoxvilleWorldFair1982</p>
            </div>
        </div>
    );
}

export default Badge;