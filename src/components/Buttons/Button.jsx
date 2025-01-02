import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, backgroundColor, onClick }) => {
    const style = { backgroundColor };
    return (
        <button style={style} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
};