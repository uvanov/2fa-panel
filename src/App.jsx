import React, { useEffect } from 'react';

import Header from './components/layout/Header/Header';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Container from './components/layout/Container/Container';
import Content from './components/layout/Content/Content';

import StyledApplicationGrid from './App.styles';

const App = () => {

  useEffect(() => {
    console.clear();
    console.log('Developed by uvanov ( github.com/uvanov )')
  }, [])

  return (
    <>
      <Header/>
      <Container>
        <StyledApplicationGrid
          columns={ ['1fr', '3fr'] }
          columnGap={ 20 }
        >
          <Sidebar/>
          <Content />
        </StyledApplicationGrid>
      </Container>
    </>
  );
};

export default App;