import styled from '@emotion/styled';
import { css } from '@emotion/react';


export default styled.div`
  display: ${props => (props.inline ? 'inline-grid' : 'grid')};
  grid-template-columns: ${props => props.columns};
  
  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `}

  ${props => props.columnGap && css`
    column-gap: ${props.columnGap}px;
  `}

  ${props => props.rowGap && css`
    row-gap: ${props.rowGap}px;
  `}

  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}

  ${props => props.alignContent && css`
    align-content ${props.alignContent};
  `}

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}

  ${props => props.justifyItems && css`
    justify-items: ${props.justifyItems};
  `}
`;