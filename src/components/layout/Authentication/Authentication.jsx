import React, { useContext } from 'react';
import { StepContext } from '../TwoFactor/TwoFactor';

import StyledAuthentication from './Authentication.styles';
import Connecting from './Connecting/Connecting';
import Reserve from './Reserve/Reserve';
import Additional from './Additional/Additional';
import Enabled from './Enabled/Enabled';

const Authentication = () => {
  const {
    step
  } = useContext(StepContext);

  return (
    <StyledAuthentication>
      { step === 'connecting' && <Connecting /> }
      { step === 'reserve' && <Reserve /> }
      { step === 'additional' && <Additional /> }
      { step === 'enabled' && <Enabled /> }
    </StyledAuthentication>
  );
};

export default Authentication;