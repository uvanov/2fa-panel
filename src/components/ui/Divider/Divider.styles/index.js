import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.div`
  height: 1px;
  background-color: #E9E9E9;
  
  ${props => props.top && css`
    margin-top: ${props.top}px;
  `}

  ${props => props.bottom && css`
    margin-bottom: ${props.bottom}px;
  `}
`;