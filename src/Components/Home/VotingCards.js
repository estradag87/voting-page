import React from 'react';
import './Home.scss';
import { PERSON_LIST } from "../Data"
import { Row, Col, Container, ProgressBar } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class VotingCards extends React.Component {
  render() {
    const progressNumber = 22
    return (
      <Container>
        <h2 className="votes">Votes</h2>
        <Row className="people">
          {PERSON_LIST.map((item) => (
            <div className="peopleContainer" key={item.id} >
              <div className="personContainer">
                <div id="personElement">
                  <div className="personImage" style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.8), rgba(255,255,255,0)), url("${item.image}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
                  </div>
                </div>
                <h3 className="personName">{item.name}</h3>
                <img className="iconHand" src="/Images/Bg-hand-up.png" alt="iconHandUp" />
                <h5 className="personCategory"><span className="personCategoryBold">{item.months} ago</span> in {item.category}</h5>
                <h6 className="personInfo">{item.info}</h6>
                <button className="countUp"><img className="handUp" src="/Images/up.png" /></button>
                <button className="countDown"><img className="handDown" src="/Images/down.png" /></button>
                <button className="voteNow">Vote now</button>
                <div className="progressBarContainer">
                  <ProgressBar now={progressNumber} />
                  <img className="progressHandUp" src="/Images/up.png" alt="handUp" />
                  <h4 className="numberUp">{`${progressNumber}%`}</h4>
                </div>
              </div>
            </div>
          )
          )}
        </Row>
        <ToastContainer />
      </Container>
    );
  }
}
export default VotingCards;