import React from "react";
import "./TitleBlockStyle.scss"
import PropTypes from "prop-types"

export default function TitleBlock({title}) {
    return (
        <div className="block-title">
            <p>{title}</p>
        </div>
    )
}

TitleBlock.propTypes = {
   title: PropTypes.string,
}
