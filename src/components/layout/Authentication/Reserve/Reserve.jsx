import React, { useContext } from 'react';
import {
  Button, Code,
  Flex,
  Icon,
  StepHeading,
  Typography
} from '../../../ui/ui';

import { StepContext } from '../../TwoFactor/TwoFactor';
import {
  ReserveCodeGrid
} from './Reserve.styles';

import { RESERVE_CODES } from './Reserve.constants';

const Reserve = () => {

  const { setStep } = useContext(StepContext);

  const onCopyToClipboard = (event) => {
    event.preventDefault();
    const text = RESERVE_CODES.join('\n');

    navigator.clipboard.writeText(text)
      .finally(alert('Codes was copied to clipboard.'));
  };

  return (
    <Flex
      direction="column"
      gap={ 16 }
    >
      <Flex
        direction="column"
        gap={ 10 }
      >
        <StepHeading
          label={ <Icon icon="" color="white"/> }
          text="Омнидеск успешно добавлен в приложение для создания 2FA-кодов"
          completed
        />
        <StepHeading
          label="2"
          text="Сохранение резервных кодов доступа"
        />
      </Flex>
      <Flex
        direction="column"
        gap={ 5 }
      >
        <Typography>
          <b>Очень важно</b> сохранить нижеуказанные одноразовые коды.
          Если потеряете смартфон или купите новый, вы не сможете попасть в ваш аккаунт без этих кодов.
          Скопируйте и сохраните их в надёжном месте:
        </Typography>
        <ReserveCodeGrid
          justifyItems="center"
          columns={ 5 }
        >
          {
            RESERVE_CODES.map(code => (
              <Code
                key={ code }
                bold
              >
                { code }
              </Code>
            ))
          }
        </ReserveCodeGrid>
      </Flex>
      <Flex
        justify="center"
        gap={ 10 }
      >
        <Typography>
          <a
            href="#copy"
            onClick={ onCopyToClipboard }
          >
            скопировать в буфер обмена
          </a>
        </Typography>
        <Typography>
          <a href="#download">скачать файл с кодами</a>
        </Typography>
      </Flex>
      <Flex justify="flex-end">
        <Button
          variant="blue"
          onClick={ () => setStep('additional') }
        >
          Продолжить
        </Button>
      </Flex>
    </Flex>
  );
};

export default Reserve;