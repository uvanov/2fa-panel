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
  // enabled - включена
  const [step, setStep] = useState('disabled');

  return (
    <>
      <StyledTwoFactor>
        <Flex justify="space-between">
          <Flex
            align='center'
            gap={ 5 }
          >
            {
              step === 'enabled'
                ? <Icon icon="" color="#6FCF97"/>
                : <Icon icon="" color="#EB5757"/>
            }
            <Typography bold>
              Двухфакторная аутентификация { step === 'enabled' ? 'включена' : 'отключена' }
            </Typography>
          </Flex>
          {
            step === 'enabled'
              ? (
                <Button
                  variant="red"
                  onClick={ () => setStep('disabled') }
                >
                  отключить
                </Button>
              )
              : (
                <Button
                  variant="green"
                  disabled={ step !== 'disabled' }
                  onClick={ () => setStep('connecting') }
                >
                  Настроить
                </Button>
              )
          }
        </Flex>
      </StyledTwoFactor>
      {
        step === 'disabled' && (
          <Divider/>
        )
      }
      <StepContext.Provider value={ { step, setStep } }>
        <Authentication/>
      </StepContext.Provider>
    </>
  );
};

export default TwoFactor;