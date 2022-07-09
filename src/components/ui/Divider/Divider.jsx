import React from 'react';

import StyledDivider from './Divider.styles';

const Divider = ({ top, bottom }) => {
  return (
    <StyledDivider
      top={ top }
      bottom={ bottom }
    />
  );
};

export default Divider;