import React from "react";
import "./ProductItemStyle.scss"
import PropTypes from "prop-types"


export default function ProductItem(props) {
    return (
        <div className="shop-item">
            <div className="shop-img">
                <img src={props.src} alt="" />
            </div>
            <p className="shop-title">{props.title}</p>
            <p className="shop-description">{props.description}</p>
        </div>
    )
}

ProductItem.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
ProductItem.defaultProps = {
    title: "",
    description: "",
}
