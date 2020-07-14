import React from "react";

import "./styles/Badge.css";

import horizontalLogoImage from "../images/kwf-hor-logo.png";

const Badge = () => {
    return (
        <div className="Badge">
            <div className="Badge__Header">
                <img src={horizontalLogoImage} alt="World's Fair Logo" />
            </div>
            <div className="Badge__Body">
                <div className="Badge__Body--user-main-info">
                    <img
                        src="http://2.gravatar.com/avatar/8c1891a17fceee9a6c145a8e9fea8be4?s=500"
                        alt="User Photo"
                    />
                    <h1>
                        User
                        <br />
                        Name
                    </h1>
                </div>
                <div className="Badge__Body--user-aditional-info">
                    <h3>
                        Job Title
                    </h3>
                    <p>
                        @Twitter
                    </p>
                </div>
            </div>
            <div className="Badge__Footer">
                <p>#KnoxvilleWorldsFair1982</p>
            </div>
        </div>
    );
}

export default Badge;