import React from 'react';

import TwoFactor from '../TwoFactor/TwoFactor';
import {
  Flex,
  Typography,
  Alert
} from '../../ui/ui';

import {
  ContentAlert,
  StyledContent
} from './Content.styles';

const Content = () => {
  return (
    <StyledContent
      direction='column'
      gap={ 20 }
    >
      <ContentAlert>
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
      </ContentAlert>
      <TwoFactor />
    </StyledContent>
  );
};

export default Content;