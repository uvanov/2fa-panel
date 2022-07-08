import React from 'react';
import {
  Flex,
  IconButton
} from '../../ui/ui';
import Account from '../Account/Account';

import AvatarSource from '../../../assets/images/avatar.png';

const Toolbar = () => {
  return (
    <Flex gap={ 10 }>
      <IconButton icon={ '' }/>
      <IconButton icon={ '' }/>
      <Account imageUrl={ AvatarSource }/>
    </Flex>
  );
};

export default Toolbar;