import styled from '@emotion/styled';

export default styled.span`
  font-family: FontAwesome, FontAwesomeBrands;
  color: ${ props => props.color ? props.color : '#383F47' };
`;