import React from 'react';

import StyledIcon from './Icon.styles';

const Icon = ({ icon, color }) => {
  return (
    <StyledIcon color={ color }>
      { icon }
    </StyledIcon>
  );
};

export default Icon;