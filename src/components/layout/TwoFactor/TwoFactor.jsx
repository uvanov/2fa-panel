import React, { createContext, useState } from 'react';
import {
  Flex,
  Icon,
  Typography,
  Button,
  Divider
} from '../../ui/ui';

import StyledTwoFactor from './TwoFactor.styles';
import Authentication from '../Authentication/Authentication';

export const StepContext = createContext(null);

const TwoFactor = () => {
  // disabled - отключена,
  // connecting - подключение,
  // reserve - резервные коды,
  // additional - дополнительный способ
  const [step, setStep] = useState('disabled');

  return (
    <>
      <StyledTwoFactor>
        <Flex justify="space-between">
          <Flex gap={ 5 }>
            <Icon icon="" color="#EB5757"/>
            <Typography bold>
              Двухфакторная аутентификация отключена
            </Typography>
          </Flex>
          <Button
            variant="green"
            disabled={ step !== 'disabled' }
            onClick={ () => setStep('connecting') }
          >
            Настроить
          </Button>
        </Flex>
      </StyledTwoFactor>

      <StepContext.Provider value={{ step, setStep }}>
        <Authentication />
      </StepContext.Provider>
      <Divider/>

    </>
  );
};

export default TwoFactor;