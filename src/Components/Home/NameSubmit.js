import React from 'react';
import './NameSubmit.scss';
import { Modal, Button } from 'react-bootstrap'



class NameSubmit extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }



  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div className="nameSubmit">
          <img className="NameSubmitImage" src="/Images/namesSubmit.jpg" alt="peopleWalking" />
          <h4 className="submitInfo">Is there anyone else you would want us to add?</h4>
          <button className="submitButton" onClick={this.showModal}>Submit a Name</button>
        </div>
        <div>
          {
            this.state.show === true ?
              <>
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
              </>
              :
              null
          }
        </div>
      </div>
    );
  }
}


export default NameSubmit;
