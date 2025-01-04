import React from 'react';
import PropTypes from "prop-types";
import {RCCurrency} from "rc-fsc-ui-kit";

const Currency = ({width, name, fill, bg}) => {
    return <RCCurrency name={name} width={width} height={width} fill={fill} bg={bg}/>;
};

Currency.propTypes = {
    width: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    bg: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default Currency;