import React from 'react';
//meta tags
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Wrapper } from './style';
import Song_10 from './song_10';
import Song_9 from './song_9';
import Song_8 from './song_8';

export default function Content() {
  return (
    <div>
      <Helmet title="React OnePage" />
      <Wrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Song_10} />
            <Route path="/song_9" component={Song_9} />
            <Route path="/song_8" component={Song_8} />
          </Switch>
        </BrowserRouter>
        <Song_10></Song_10>
      </Wrapper>
    </div>
  );
}
