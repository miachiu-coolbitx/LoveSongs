import styled from 'styled-components';
import flex from '../../style/flex';
import colors from '../../style/colors';

export const Wrapper = styled.div`
  background-color: ${colors.font};
  height: 100%;
`;

export const FormStyle = styled.div`
  padding: 15px;
  border: 1px solid orange;
`;

export const Button = styled.div`
  padding: 15px;
  border: 1px solid orange;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  object-position: 0 0;
  margin-top: 0px;
  border-radius: 100%;
  ${(props) => props.styles}
`;

export const Title = styled.h5`
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  color: ${colors.font};
  ${(props) => props.styles}
`;

export const Row = styled.div`
  ${flex.flexWrap}
  ${flex.centerVerticalV}
  width: 100%;
  padding: 15px 0;
`;

export const Padding = styled.div`
  padding: 8px 15px;
`;

const BasicBtn = `
  padding: 7px 15px;
  background: ${colors.hint};
  font-size: 16px;
  text-align: center;
  border-radius: 6px;
  border: none;
  transition: all 0.3s ease-in-out;
`;

export const NextBtn = styled.button`
  ${BasicBtn}
  position: absolute;
  bottom: 6%;
  right: 6%;
  padding: 12px 30px;
  z-index: 999;
`;

export const Lyrics = styled.div`
  position: absolute;
  top: 40%;
  left: 3%;
  z-index: 10;
`;

export const Num_ring = styled.div`
  position: absolute;
  top: 85px;
  left: 25px;
  z-index: 999;
`;
export const Song_num = styled.div`
  position: absolute;
  top: 125px;
  left: 60px;
  font-size: 14px;
  z-index: 999;
`;

export const Film_9 = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15.5em;
  height: 15.5em;
  border-radius: 50%;
`;
