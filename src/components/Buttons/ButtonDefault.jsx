import React from 'react';
import PropTypes from 'prop-types';
import { RCButton } from 'rc-fsc-ui-kit'

export const ButtonDefault = ({ label, onClick }) => {
    return (
        <RCButton onClick={onClick}>
            {label}
        </RCButton>
    );
};

ButtonDefault.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};