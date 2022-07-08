import React from 'react';

import StyledIconButton from './IconButton.styles';

const IconButton = ({ icon, ...remainingProps }) => {
  return (
    <StyledIconButton {...remainingProps}>
      { icon }
    </StyledIconButton>
  );
};

export default IconButton;