import React from 'react';
import Num from '../../components/number';
import { FormStyle } from './style';
import { ContentMiddle, Picture } from '../../style/style';
import '../../style/song_9.scss';

export default function Song_9() {
  const test_num = React.useState('9');
  return (
    <div>
      <ContentMiddle style={{ padding: '0' }}>
        <Picture>
          <Num test_num={test_num}></Num>
          <a href="/song_8">下一層</a>
          <div className="wrapper">
            <div className="score"></div>
            <div className="sun"></div>
            <div className="grid"></div>
            <div className="car">
              <div className="car__mirror car__mirror--left"></div>
              <div className="car__mirror car__mirror--right"></div>
              <div className="car__wheel car__wheel--left"></div>
              <div className="car__wheel car__wheel--right"></div>
              <div className="car__roof"></div>
              <div className="car__bumper"></div>
              <div className="car__back">
                <div className="car__light car__light--left"></div>
                <div className="car__light car__light--small car__light--left"></div>
                <div className="car__light car__light--small car__light--right"></div>
                <div className="car__light car__light--right"></div>
                <div className="car__grill">
                  <div className="car__emblem"></div>
                </div>
              </div>
              <div className="car__plate">SYNTH</div>
              <div className="car__exhaust car__exhaust--left"></div>
              <div className="car__exhaust car__exhaust--right"></div>
            </div>
            <div className="diamond"></div>
            <div className="diamond"></div>
            <div className="diamond"></div>
            <div className="diamond"></div>
            <div className="circle"></div>
          </div>
        </Picture>
      </ContentMiddle>
    </div>
  );
}
