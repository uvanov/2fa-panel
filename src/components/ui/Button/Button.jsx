import React from 'react';

import StyledButton from './Button.styles';

const Button = (
  {
    variant,
    children,
    disabled,
    ...remainingProps
  }) => (
  <StyledButton
    variant={ variant }
    disabled={ disabled }
    { ...remainingProps }
  >
    { children }
  </StyledButton>
);

export default Button;