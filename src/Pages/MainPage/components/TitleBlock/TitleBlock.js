import React from "react";
import "./TitleBlockStyle.scss"

export default function TitleBlock({title}) {
    return (
        <div className="block-title">
            <p>{title}</p>
        </div>
    )
}
