import React from 'react';
import Num from '../../components/number';
import { FormStyle } from './style';
import { ContentMiddle } from '../../style/style';
import '../../style/song_10.scss';

export default function Song_9() {
  const test_num = React.useState("9");
  return (
    <div>
      <ContentMiddle>
      <Num test_num={test_num}></Num>
        <FormStyle>
          <a href="/song_8">下一層</a>
        </FormStyle>
      </ContentMiddle>
    </div>
  );
}
