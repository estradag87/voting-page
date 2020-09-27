import React from 'react';
import './Banner.scss';


class Banner extends React.Component {
  render() {
    return (
      <div className="bannerContainer">
        <img className="bannerImage" src="/Images/pope.jpg" alt="pope" />
        <h6 className="bannerName">Pope Francis?</h6>
        <h3 className="bannerName">Pope Francis?</h3>
        <h6 className="bannerInfo">Pope Francis?</h6>
        <div className="progressBarContainer">
          <img className="progressHandUp" src="/Images/up.png" alt="handUp" />
          <img className="progressHandDown" src="/Images/down.png" alt="handDown" />
        </div>
      </div>
    );
  }
}

export default Banner;