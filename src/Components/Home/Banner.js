import React from 'react';
import './Banner.scss';


class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="bannerContainer">
          <h6 className="bannerOpinion">What´s your opinion on</h6>
          <h3 className="bannerName">Pope Francis?</h3>
          <h4 className="bannerInfo">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h4>
          <a className="bannerMoreInfo" href="https://en.wikipedia.org/wiki/Pope_Francis">More Information</a>
          <h5 className="bannerVerdict">What´s Your Verdict?</h5>
          <div className="countUp" ><img className="handUp" src="/Images/up.png" /></div>
          <div className="countDown" ><img className="handDown" src="/Images/down.png" /></div>
        </div>
      </div>
    );
  }
}

export default Banner;