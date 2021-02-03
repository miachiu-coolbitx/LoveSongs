import React from 'react';
import Num from '../../components/number';
import Tree from '../../components/tree';
import { NextBtn, Film_9 } from './style';
import { ContentMiddle, Picture } from '../../style/style';
import '../../style/song_9.scss';

export default function Song_9() {
  const song_num = React.useState('9');
  return (
    <div>
      <ContentMiddle style={{ padding: '0' }}>
        <Picture>
          <Num song_num={song_num}></Num>
          <NextBtn>
            <a href="/song_8">下一層</a>
          </NextBtn>
          <div className="wrapper">
            <div className="sun"></div>
            <Film_9>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/7tIsVFM6z1E?start=11&autoplay=1&loop=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </Film_9>
            <div className="grid"></div>
            <Tree></Tree>
          </div>
        </Picture>
      </ContentMiddle>
    </div>
  );
}
