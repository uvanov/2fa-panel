import React from 'react';
import { Flex, Typography } from '../ui';

import {
  StepHeadingLabel,
  StepHeadingBody
} from './StepHeading.styles';

const StepHeading = (
  {
    label,
    text,
    completed
  }) => {
  return (
    <Flex>
      <StepHeadingLabel
        justify='center'
        align='center'
      >
        { label }
      </StepHeadingLabel>
      <StepHeadingBody
        align='center'
      >
        <Typography
          color={ completed ? '#828282' : '#4F4F4F' }
          bold={ !completed }
        >
          { text }
        </Typography>
      </StepHeadingBody>
    </Flex>
  );
};

export default StepHeading;