import React from 'react';

import StyledIconButton from './IconButton.styles';
import Icon from '../Icon/Icon';

const IconButton = ({ icon, color, ...remainingProps }) => {
  return (
    <StyledIconButton {...remainingProps}>
      <Icon icon={ icon } color={ color ? color : undefined }/>
    </StyledIconButton>
  );
};

export default IconButton;