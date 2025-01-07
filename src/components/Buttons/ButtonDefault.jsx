import React from 'react';
import PropTypes from 'prop-types';
import {RCButton} from 'rc-fsc-ui-kit'

export const ButtonDefault = ({label, onClick, background, color, size, disabled, loader, outline, defBtn}) => {
    return (
        <RCButton onClick={onClick}
                  background={background}
                  color={color}
                  size={size}
                  disabled={disabled}
                  outline={outline}
                  loader={loader}
                  defBtn={defBtn}
        >
            {label}
        </RCButton>
    );
};

ButtonDefault.propTypes = {
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loader: PropTypes.bool,
    defBtn: PropTypes.bool,
    outline: PropTypes.bool,
    onClick: PropTypes.func,
};