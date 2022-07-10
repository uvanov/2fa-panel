import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.p`
  color: ${ props => props.color };
  font-size: 14px;

  ${ props => props.bold && css`
    font-weight: bold;
  ` }

  ${ props => props.align && css`
    text-align: ${props.align};
  ` }
`;