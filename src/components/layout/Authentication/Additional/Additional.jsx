import React, { useContext } from 'react';
import { useCode } from '../../../../hooks/useCode';
import {
  Button,
  Code,
  CodeInput,
  Flex,
  Grid,
  Icon,
  StepHeading, Typography
} from '../../../ui/ui';
import { StepContext } from '../../TwoFactor/TwoFactor';

const Additional = () => {
  const [codeStatus, onCodeChange] = useCode('530962')
  const { setStep } = useContext(StepContext);

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
          label={ <Icon icon="" color="white"/> }
          text="Резервные коды доступа успешно сохранены"
          completed
        />
        <StepHeading
          label="3"
          text="Настройка дополнительного способа для получения кодов"
        />
      </Flex>
      <Flex
        direction="column"
        align='center'
        gap={ 6 }
      >
        <Typography align='center'>
          В качестве дополнительного способа для получения кодов используется <a href='https://desktop.telegram.org/'>Телеграм</a>.
          Если этот способ покажется вам удобным, вы сможете сделать его основым. Откройте Телеграм,
          найдите бота <b>@omnidesk_2fa_bot</b>, отправьте в его адрес следующий набор символов и укажите
          в поле шесть цифр из ответа бота:
        </Typography>
        <Code>
          2lns-eafx-p7mx-btyn
        </Code>
      </Flex>
      <Grid
        columns={ 3 }
      >
        <div/>
        <Flex
          justify='center'
        >
          <CodeInput
            status={ codeStatus }
            onChange={ onCodeChange }
          />
        </Flex>
        <Flex
          justify='flex-end'
          align='flex-end'
        >
          <Button
            variant="blue"
            disabled={ codeStatus !== 'valid' }
            onClick={ () => setStep('enabled') }
          >
            Продолжить
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Additional;