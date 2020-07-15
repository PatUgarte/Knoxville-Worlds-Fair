import React from "react";

import Card from "./Card.jsx";

import "./styles/CardList.css";

const CardList = (props) => {

    const { badges } = props;

    return (
        <>
            <div className="CardList__Container">
                <ul>
                    {badges.map((badge) => (
                        <li key={badge.id} className="CardList__Container--item">
                            <Card badge={badge} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default CardList;