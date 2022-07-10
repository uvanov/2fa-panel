import styled from '@emotion/styled';
import { Flex } from '../../../ui/ui';

export const SidebarHeader = styled.div`
  background: #E9E9E9;
  padding: 11px 0 9px 15px;
  border-radius: 5px 5px 0 0;
`;

export const SidebarBody = styled(Flex)`
  padding: 15px 16px;
  background: #F6F6F6;
  border: 1px solid #E9E9E9;
  border-radius: 0 0 5px 5px;
`;

export const SidebarItemIconWrapper = styled(Flex)`
  min-width: 30px;
  height: 30px;
  background-color: ${ props => props.selected ? '#6FCF97' : '#E9E9E9' };
  border-radius: 4px 0 0 4px;
  transition: background-color .3s;
`;

export const SidebarItemBody = styled(Flex)`
  width: 100%;
  padding-left: 11px;
  background-color: ${ props => props.selected ? '#6FCF97' : '#E9E9E9' };
  border-radius: 0 4px 4px 0;
  transition: background-color .3s;
  cursor: pointer;
`;