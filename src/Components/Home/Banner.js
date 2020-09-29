import React from 'react';
import './Banner.scss';
import { ProgressBar } from "react-bootstrap";


class Banner extends React.Component {
  render() {
    const progressDays = 22
    return (
      <div className="banner">
        <div className="bannerContainer">
          <h6 className="bannerOpinion">What´s your opinion on</h6>
          <h3 className="bannerName">Pope Francis?</h3>
          <h4 className="bannerInfo">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h4>
          <a className="bannerMoreInfo">More Information</a>
          <h5 className="bannerVerdict">What´s Your Verdict?</h5>
          <div className="countUp" ><img className="handUp" src="/Images/up.png" /></div>
          <div className="countDown" ><img className="handDown" src="/Images/down.png" /></div>
        </div>
        <div className="progressDaysContainer">
          <ProgressBar now={progressDays} />
          <h4 className="closingIn">CLOSING IN</h4>
          <h4 className="numberDown"><span className="numberDownBold">22</span> days</h4>
        </div>
      </div>
    );
  }
}

export default Banner;