import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'redcat-ui-kit'

export const ButtonDefault = ({ label, onClick, className }) => {
    return (
        <Button label={label} className={className} onClick={onClick} />
    );
};

ButtonDefault.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};