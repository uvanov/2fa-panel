import styled from '@emotion/styled';
import { Icon } from '../../ui';

export const CodeInputWrapper = styled.div`
  position: relative;
  width: 118px;
  background: #F6F6F6;
  border: 1px solid #E0E0E0;
  border-radius: 3px;
`;

export const CodeInputField = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  font-size: 12px;
  border: 0;
  text-align: center;
  box-sizing: border-box;
`;

export const CodeInputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);
  font-size: 12px;
  transition: color .3s;
`;