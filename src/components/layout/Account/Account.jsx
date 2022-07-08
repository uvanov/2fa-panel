import React from 'react';

import { StyledAccount, AccountAvatar } from './Account.styles';
import Icon from '../../ui/Icon/Icon';

const Account = ({ imageUrl }) => {
  return (
    <StyledAccount
      align='flex-start'
      gap={ 5 }
    >
      <AccountAvatar src={ imageUrl }/>
      <Icon icon={ '' }/>
    </StyledAccount>
  );
};

export default Account;