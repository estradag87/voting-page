import React from 'react';
import './Footer.scss';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footerLinks">
          <a>Terms and Conditions</a>
          <a>Privacy Policy</a>
          <a>Contact Us</a>
        </div>
        <div className="footerSocial">
          <p>Follow Us</p>
          <div className="footerIcons">
            <a href="https://www.facebook.com/"><AiFillFacebook /></a>
            <a href="https://twitter.com/"><AiOutlineTwitter /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

