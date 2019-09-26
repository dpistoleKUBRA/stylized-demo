import React from 'react';
import PropTypes from 'prop-types';
import classNamesFn from 'classnames';

export const PrimaryButton = (props) => {
  const {
    disabled,
    label,
    className,
  } = props;

  const buttonClasses = {
    'primary-button': true,
    'primary-button--disabled': disabled,
  };

  return (
    <button className={classNamesFn(buttonClasses, className)}>{label}</button>
  );
}

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
}

PrimaryButton.defaultProps = {
  disabled: false,
};

export const SecondaryButton = (props) => {
  const {
    disabled,
    label,
    className,
  } = props;

  const buttonClasses = {
    'secondary-button': true,
    'secondary-button--disabled': disabled,
  };

  return (
    <button className={classNamesFn(buttonClasses, className)}>{label}</button>
  );
}

SecondaryButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
}

SecondaryButton.defaultProps = {
  disabled: false,
};

