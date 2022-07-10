import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.button`
  color: white;
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  padding: 6px 14px;
  
  cursor: pointer;
  transition: background-color .3s, color .3s;
  
  ${props => props.variant === 'blue' && css`
    background: #2D9CDB;

    &:hover {
      background: #237aab;
    }
  `}

  ${props => props.variant === 'green' && css`
    background: #6FCF97;

    &:hover {
      background: #5bab7c;
    }
  `}

  ${props => props.variant === 'red' && css`
    background: transparent;
    color: #FF0000;

    &:hover {
      background: #FF0000;
      color: white;
    }
  `}

  ${props => props.disabled && css`
    cursor: not-allowed;
    background: #E0E0E0;
    
    &:hover{
      background: #E0E0E0;
    }
  `}
`;
