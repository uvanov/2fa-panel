import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.p`
  color: ${ props => props.color };

  ${ props => props.bold && css`
    font-weight: bold;
  ` }
`;