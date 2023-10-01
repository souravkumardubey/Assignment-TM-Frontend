import React from "react";
import ReactDOM from "react-dom/client";
import "./Card.css"

export default function Card({children,cardClass,cardStyle={}}){
    cardClass = "card " + cardClass;
    return (
        <div className={cardClass} style={cardStyle}>
            <div className={"container"}>
                {children}
            </div>
        </div>
    )
}