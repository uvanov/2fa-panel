import styled from '@emotion/styled';

export default styled.span`
  font-family: FontAwesome;
  color: ${ props => props.color ? props.color : '#383F47' };
`;