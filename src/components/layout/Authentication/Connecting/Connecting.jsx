import React, { useContext, useState } from 'react';
import { useCode } from '../../../../hooks/useCode';
import {
  Button,
  Flex,
  StepHeading,
  Typography,
  CodeInput
} from '../../../ui/ui';
import { StepContext } from '../../TwoFactor/TwoFactor';

import { QRCodeImage } from './Connecting.styles';

import QRCodeSource from '../../../../assets/images/qr-code.png';

const Connecting = () => {
  const [codeStatus, onCodeChange] = useCode('234567');
  const { setStep } = useContext(StepContext);


  return (
    <Flex
      direction="column"
      gap={ 16 }
    >
      <StepHeading
        label="1"
        text="Добавление Омнидеска в приложение"
      />
      <Typography>
        Откройте мобильное приложение для создания кодов двухфакторной аутентификации
        (к примеру, <a href="https://example.com">Google Authenticator</a>, <a href="https://example.com">Microsoft
        Authenticator</a>,
        <a href="https://example.com">Authy</a>, <a href="https://example.com">1Password</a>, <a
        href="https://example.com">LastPass Authenticator</a>),
        отсканируйте QR-код и укажите в поле шесть цифр из приложения:
      </Typography>
      <Flex
        justify="space-between"
        align="flex-end"
      >
        <div/>
        <Flex
          direction="column"
          align="center"
          gap={ 10 }
        >
          <QRCodeImage src={ QRCodeSource } alt="QR Code"/>
          <CodeInput
            onChange={ onCodeChange }
            status={ codeStatus }
          />
        </Flex>
        <Button
          onClick={ () => setStep('reserve') }
          variant="blue"
          disabled={ codeStatus !== 'valid' }
        >
          Продолжить
        </Button>
      </Flex>
    </Flex>
  );
};

export default Connecting;