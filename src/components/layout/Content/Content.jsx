import React from 'react';

import {
  Flex,
  Typography
} from '../../ui/ui';
import Alert from '../../ui/Alert/Alert';
import TwoFactor from '../TwoFactor/TwoFactor';

const Content = () => {
  return (
    <Flex
      direction='column'
      gap={ 20 }
    >
      <Alert>
        <Flex
          direction='column'
          gap={ 30 }
        >
          <Typography>
            Двухфакторная аутентификация (2FA) позволяет эффективнее защищать аккаунт от
            несанкционированного проникновения. При её использовании для доступа к вашему
            аккаунту необходимо предоставить данные двух разных типов (пароль + специальный код),
            что значительно надёжнее классической парольной системы.
          </Typography>
          <Typography>
            Подробнее о настройках этого подраздела <a href="#">читайте в нашей базе знаний</a>.
          </Typography>
        </Flex>
      </Alert>
      <TwoFactor />
    </Flex>
  );
};

export default Content;