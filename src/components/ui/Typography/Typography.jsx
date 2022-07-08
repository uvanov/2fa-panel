import React from 'react';

import StyledTypography from './Typography.styles';

const Typography = ({ color, bold, ...remainingProps }) => {
  return (
    <StyledTypography
      color={ color }
      bold={ bold }
      { ...remainingProps }
    />
  );
};

export default Typography;