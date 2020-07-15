import React, { useState } from "react";

import Navbar from "../components/Navbar.jsx";
import CardList from "../components/CardList.jsx";

import cartoonLogoImage from "../images/kwf-cartoon-logo.png";

import "./styles/AllBadges.css";

const AllBadges = () => {

    const [data, setData] = useState(
        [
            {
                id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                firstName: "Bart",
                lastName: "Simpson",
                email: "bart_simpson@gmail.com",
                jobTitle: "Logística",
                twitter: "AyCaramba",
                avatarUrl: "avatarBart"
                    //"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            },
            {
                id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                firstName: "Milhouse",
                lastName: "Van Houten",
                email: "milhousevh@yahoo.com",
                jobTitle: "Guía",
                twitter: "MiltonVH",
                avatarUrl: "avatarMilhouse"
                    //"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            },
            {
                id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                firstName: "Nelson",
                lastName: "Muntz",
                email: "nelson@hotmail.com",
                jobTitle: "Prevención",
                twitter: "DobleNelson",
                avatarUrl: "avatarNelson"
                    //"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
            },
            {
                id: "2de30c42-33a2-44ca-9ac1-05e62b5939a7",
                firstName: "Martin",
                lastName: "Prince",
                email: "mprince@gmail.com",
                jobTitle: "Finanzas",
                twitter: "LaReinaDelVerano",
                avatarUrl: "avatarMartin"
                    //"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
            }
        ]
    );

    return (
        <>
            <Navbar />
            <div className="AllBadges__Container">

                <div className="AllBadges__Hero-Container">
                    <div className="AllBadges__Hero-Container--logo">
                        <img src={cartoonLogoImage} alt="World Fair Logo" />
                    </div>
                    <div className="AllBadges__Hero-Container--search-bar">
                        <input placeholder="Buscá tu Badge"></input>
                        <button className="btn btn-secondary">Buscar</button>
                    </div>
                </div>

                <div className="AllBadges__Card-Container">
                    <a href="/badge/create">
                        <button className="btn btn-primary">Crear Badge</button>
                    </a>
                    <CardList badges={data} />
                </div>
            </div>
        </>
    );
}

export default AllBadges;