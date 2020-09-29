import React from 'react';
import './Notification.scss';


class Notification extends React.Component {
  render() {
    return (
      <div>
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
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}




export default Notification;