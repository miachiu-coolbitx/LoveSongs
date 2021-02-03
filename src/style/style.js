import styled from 'styled-components';
import colors from './colors';

export const Wrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  z-index: -10;
`;

export const Bg_10 = styled.div`
  position: relative;
  height: 100%;
  background: ${colors.bg_10};
`;

export const ContentMiddle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 30px;
`;

export const Picture = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;
