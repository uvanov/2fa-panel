import styled from '@emotion/styled';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  font-family: "FontAwesome";
  color: ${props => props.color ? props.color : '#383F47' };

  background-color: rgba(255, 255, 255, .5);
`;