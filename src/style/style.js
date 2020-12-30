import styled from 'styled-components';
import colors from './colors';

export const Wrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  background-color: ${colors.primary};
  z-index: -10;
`;

export const ContentMiddle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 30px;
  ${(props) => props.styles}
`;

export const Picture = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;
