import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ onClick, children, disabled, ...rest }) => (
  <button
    type="button"
    className={styles.primaryButton}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  onClick: undefined,
  disabled: false,
};

export default PrimaryButton;