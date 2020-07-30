import React from 'react';
import PropTypes, {checkPropTypes} from 'prop-types';
import "./WrapperStyle.scss"

const Wrapper = ({ children }) => {
    return (
        <div className="wrap">
            {children}
        </div>
    );
};

Wrapper.propTypes = {
    children:PropTypes.any
};

export default Wrapper;
