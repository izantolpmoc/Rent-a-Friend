import React from 'react';
import PropTypes from 'prop-types';
import '@styles/components/button.scss'

const Button = ({ label, onClick = () => {}, type = 'button', style = {} }) => {
    return (
        <button className='button' type={type} onClick={onClick} style={style}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    style: PropTypes.object,
};

export default Button;
