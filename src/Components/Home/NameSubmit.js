import React from 'react';
import './NameSubmit.scss';
import { Modal, Button } from 'react-bootstrap'



class NameSubmit extends React.Component {
  render() {
    return (
      <div className="nameSubmit">
        <img className="NameSubmitImage" src="/Images/namesSubmit.jpg" alt="peopleWalking" />
        <h4 className="submitInfo">Is there anyone else you would want us to add?</h4>
        <button className="submitButton">Submit a Name</button>
      </div>
    );
  }
}

export default NameSubmit;
