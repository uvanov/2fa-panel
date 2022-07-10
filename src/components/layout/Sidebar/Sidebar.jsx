import React, { useState } from 'react';

import {
  Flex,
  Icon,
  Typography
} from '../../ui/ui';

import {
  SidebarBody,
  SidebarHeader, SidebarItemBody, SidebarItemIconWrapper
} from './Sidebar.styles';

import { SIDEBAR_ITEMS } from './Sidebar.constants';

const Sidebar = () => {

  const [selected] = useState('2fa');

  return (
    <div>
      <SidebarHeader>
        <Typography color="#828282">
          ПРОФИЛЬ АДМИНИСТРАТОРА
        </Typography>
      </SidebarHeader>
      <SidebarBody
        direction="column"
        gap={ 15 }
      >
        {
          SIDEBAR_ITEMS.map(item => (
            <SidebarItem
              icon={ item.icon }
              text={ item.text }
              selected={ selected === item.value }
            />
          ))
        }
      </SidebarBody>
    </div>
  );
};

const SidebarItem = (
  {
    icon,
    text,
    selected
  }) => {
  return (
    <Flex
      gap={ 2 }
    >
      <SidebarItemIconWrapper
        justify="center"
        align="center"
        selected={ selected }
      >
        <Icon
          icon={ icon }
          color={ selected ? 'white' : '#BDBDBD' }
        />
      </SidebarItemIconWrapper>
      <SidebarItemBody
        align="center"
        selected={ selected }
      >
        <Typography
          color={ selected ? 'white' : '#4F4F4F' }
          bold
        >
          { text }
        </Typography>
      </SidebarItemBody>
    </Flex>
  );
};

export default Sidebar;