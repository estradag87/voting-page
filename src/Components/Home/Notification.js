import React from 'react';
import './Notification.scss';


class Notification extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: true,
    }
  }

  hideAlert() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    return (
      <div>
        {
          this.state.isActive ?
            <>
              <div className="alert alert-warning alert-dismissible" role="alert">
                <div className="alertCopy">
                  <h3 className="alertTitle">Speak out. Be heard<br /><span className="alertTitleBold">Be counted</span></h3>
                  <h4 className="alertInfo">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h4>
                </div>
                <div>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={() => this.hideAlert()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </>
            : null
        }
      </div>
    )
  }
}




export default Notification;