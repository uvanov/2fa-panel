import React from 'react';

import StyledHeader from './Header.styles';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import {
  Flex,
  IconButton
} from '../../ui/ui';
import Toolbar from '../Toolbar/Toolbar';

const Header = () => {
  return (
    <StyledHeader>
      <Container
        as={ Flex }
        align='center'
        justify='space-between'
      >
        <Navigation/>
        <Toolbar />
      </Container>
    </StyledHeader>
  );
};

export default Header;