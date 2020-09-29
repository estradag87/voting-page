import React from 'react';
import './NameSubmit.scss';
import { Modal, Button } from 'react-bootstrap'



class NameSubmit extends React.Component {
  render() {
    return (
      <div>
        <div className="nameSubmit">
          <img className="NameSubmitImage" src="/Images/namesSubmit.jpg" alt="peopleWalking" />
          <h4 className="submitInfo">Is there anyone else you would want us to add?</h4>
          <button className="submitButton">Submit a Name</button>
        </div>
        <div>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Tell us who you want?</Modal.Title>
            </Modal.Header>

            <input placeholder="Write here the name"></input>

            <Modal.Footer>
              <Button onClick={this.hideModal} variant="secondary">Close</Button>
              <Button variant="secondary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    );
  }
}


export default NameSubmit;
