import React, { useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Badge from "../components/Badge.jsx";
import BadgeForm from "../components/BadgeForm.jsx";

import cartoonLogoImage from "../images/kwf-cartoon-logo.png";

import "./styles/BadgeNew.css";

const BadgeNew = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
    });

    const formHandleChange = ({ name, value }) => {
        setData({
            ...data,
            [name]: value,
        });
    }

    return (
        <>
            <Navbar />
            <div className="BadgeNew__Container">
                <div className="BadgeNew__Hero-Container">
                    <div className="BadgeNew__Hero-Container--logo">
                        <img src={cartoonLogoImage} alt="" />
                    </div>
                </div>
                <div className="BadgeNew__Badge-Container">
                    <Badge formData={data} />
                </div>
                <div className="BadgeNew__BadgeForm-Container">
                    <BadgeForm formHandleChange={formHandleChange} formData={data} />
                </div>
            </div>
        </>
    );
}

export default BadgeNew;