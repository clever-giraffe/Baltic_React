import React from "react";
import "./ProductItemStyle.scss"
import PropTypes from "prop-types"


export default function ProductItem({src, title, description}) {
    return (
        <div className="shop-item">
                    <img src={src} alt="" className="shop-img"/>
                    <p className="shop-title">{title}</p>
                    <p className="shop-description">{description}</p>
                </div>
    )
}

ProductItem.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
