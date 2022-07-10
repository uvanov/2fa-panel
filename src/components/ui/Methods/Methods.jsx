import React from 'react';

import {
  Flex,
  Icon,
  Typography
} from '../ui';

import {
  MethodHint,
  MethodIconWrapper,
  MethodSelected,
  MethodTitle,
  StyledMethod
} from './Methods.styles';

const Methods = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  );
};

const Method = (
  {
    icon,
    iconColor,
    title,
    children,
    onSelect,
    selected
  }) => (
  <StyledMethod
    justify="space-between"
    align='center'
  >
    <Flex
      align='center'
      gap={ 15 }
    >
      <MethodIconWrapper
        justify='center'
        align='center'
        backgroundColor={ iconColor }
      >
        <Icon
          icon={ icon }
          color='white'
        />
      </MethodIconWrapper>
      <Flex direction="column" gap={ 1 }>
        <MethodTitle bold>
          { title }
        </MethodTitle>
        <Typography>
          { children }
        </Typography>
      </Flex>
    </Flex>
    <MethodSelected
      selected={ selected }
    >
      <Icon
        icon={''}
        onClick={ () => onSelect() }
      />
      <MethodHint>
        {
          selected
          ? 'Основной способ двухфакторной аутентификации'
          : 'Сделать основным способом двухфакторной аутентификации'
        }
      </MethodHint>
    </MethodSelected>
  </StyledMethod>
);

Methods.Method = Method;

export default Methods;
