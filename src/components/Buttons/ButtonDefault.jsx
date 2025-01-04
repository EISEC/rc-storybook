import React from 'react';
import PropTypes from 'prop-types';
import { RCButton } from 'rc-fsc-ui-kit'

export const ButtonDefault = ({ label, onClick, bg, color, size }) => {
    return (
        <RCButton onClick={onClick} background={bg} color={color} size={size}>
            {label}
        </RCButton>
    );
};

ButtonDefault.propTypes = {
    bg: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};