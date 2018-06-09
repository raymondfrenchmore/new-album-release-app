import React, { Component } from 'react';

import Search from '../Search/Search';
import './Results.css';

class Results extends Component {
  render() {
    return (
        <div>
          <div className="artistDetails">
            <article><span class="helper"></span><a href="https://www.discogs.com/David-Bowie-Low/release/11638558" target="_blank"><img src="https://img.discogs.com/9sY2P2DoVBWIWAOQlPJRs6AFm1M=/fit-in/600x535/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11638558-1519845059-7935.jpeg.jpg" /></a><div class="textArea"><p class="artistName">David Bowie</p><p class="releaseTitle">Low</p></div></article>
            <article><span class="helper"></span><a href="https://www.discogs.com/David-Bowie-Low/release/11638558" target="_blank"><img src="https://img.discogs.com/9sY2P2DoVBWIWAOQlPJRs6AFm1M=/fit-in/600x535/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11638558-1519845059-7935.jpeg.jpg" /></a><div class="textArea"><p class="artistName">David Bowie</p><p class="releaseTitle">Low</p></div></article>
            <article><span class="helper"></span><a href="https://www.discogs.com/David-Bowie-Low/release/11638558" target="_blank"><img src="https://img.discogs.com/9sY2P2DoVBWIWAOQlPJRs6AFm1M=/fit-in/600x535/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11638558-1519845059-7935.jpeg.jpg" /></a><div class="textArea"><p class="artistName">David Bowie</p><p class="releaseTitle">Low</p></div></article>
          </div>        
          <ul id="release-pager" className="pager">
            <li><a id="previous" href="#">Previous</a></li>
            <li><span id="page-indicator">1 of 3</span></li>
            <li><a id="next" href="#">Next</a></li>
          </ul>
      </div>
    );
  }
}

export default Results;