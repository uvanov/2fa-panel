import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};

  ${props => props.direction && css`
    flex-direction: ${props.direction};
  `}

  ${props => props.justify && css`
    justify-content: ${props.justify};
  `}

  ${props => props.align && css`
    align-items: ${props.align};
  `}

  ${props => props.gap && css`
    gap: ${typeof props.gap === 'number' ? `${props.gap}px` : `${props.gap.x}px ${props.gap.y}px`};
  `}
`;