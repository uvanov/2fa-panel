import styled from '@emotion/styled';
import {
  Flex,
  Icon,
  Typography
} from '../../ui';

export const StyledMethod = styled(Flex)`
  padding: 10px 0 10px 15px;
  border-top: 1px solid #E9E9E9;

  &:last-child {
    border-bottom: 1px solid #E9E9E9;
  }
`;

export const MethodIconWrapper = styled(Flex)`
  height: 40px;
  width: 40px;
  background-color: ${ props => props.backgroundColor };
  border-radius: 4px;
`;

export const MethodTitle = styled(Typography)`
  font-size: 16px;
`;

export const MethodSelected = styled.div`
  position: relative;

  span {
    cursor: pointer;
    color: ${ props => props.selected ? '#EEAD5F' : '#BDBDBD' };
    transition: color .3s;
    
    &:hover ~ p {
      opacity: 1;
    }
  }
`;

export const MethodHint = styled(Typography)`
  position: absolute;
  right: calc(100% + 10px);
  top: 50%;

  width: max-content;
  transform: translateY(-50%);

  padding: 5px 11px;
  
  color: black;
  background: #F6F6F6;
  border: 1px solid #E9E9E9;
  border-radius: 2px;

  pointer-events: none;
  opacity: 0;
  transition: opacity .3s;
`