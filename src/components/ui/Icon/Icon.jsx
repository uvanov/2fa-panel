import React from 'react';

import StyledIcon from './Icon.styles';

const Icon = (
  {
    icon,
    color,
    ...remainingProps
  }) => {
  return (
    <StyledIcon
      color={ color }
      { ...remainingProps }
    >
      { icon }
    </StyledIcon>
  );
};

export default Icon;