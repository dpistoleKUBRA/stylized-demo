import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
color: white;
height: 50px;
width: 150px;
cursor: pointer;
`;

const Button = (props) => {
    const {
        className,
        label,
    } = props;

    return (
        <StyledButton className={className}>{label}</StyledButton>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
}

export const PrimaryButton = styled(Button)`
    background: ${({ theme, disabled }) => disabled ? theme.buttons.disabled : theme.buttons.primary};
`;

export const SecondaryButton = styled(Button)`
  background: ${({ theme, disabled }) => disabled ? theme.buttons.disabled : theme.buttons.secondary};
`;

export default Button;
