import React, { Component } from 'react';

import Results from '../Results/Results';
import './Release.css';

class Release extends Component {
  render() {
    return (
        <div>
            <article><span className="helper"></span><a href="https://www.discogs.com/David-Bowie-Low/release/11638558" target="_blank"><img src="https://img.discogs.com/9sY2P2DoVBWIWAOQlPJRs6AFm1M=/fit-in/600x535/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11638558-1519845059-7935.jpeg.jpg" /></a><div className="textArea"><p className="artistName">David Bowie</p><p className="releaseTitle">Low</p></div></article>
        </div>
    );
  }
}

export default Release;