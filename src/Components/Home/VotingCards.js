import React from 'react';
import './Home.scss';
import { PERSON_LIST } from "../Data"
import { Row, Col, Container, ProgressBar } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class VotingCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voteType: null,
    }
  }

  componentDidMount() {
    const results = localStorage.getItem('results')

    if (results) {
      const parsedResults = JSON.parse(results)
      this.setState(parsedResults)
    }
  }

  componentDidUpdate() {
    const { voteType, ...rest } = this.state
    localStorage.setItem('results', JSON.stringify(rest))
  }

  voteType = (type) => {
    this.setState({
      voteType: type
    })
  }

  voteNow = (id) => {
    if (!this.state.voteType) {
      return (
        toast.warning("Please choose an option to vote", {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      )
    }

    let like = this.state[id] ? this.state[id].like : 0
    let dislike = this.state[id] ? this.state[id].dislike : 0

    if (this.state.voteType === 'increment') {
      like = like + 1
    } else if (this.state.voteType === 'decrement') {
      dislike = dislike + 1
    }


    this.setState({
      [id]: {
        like,
        dislike,
        progressNumber: Math.floor((like / (like + dislike)) * 100),
        voted: true
      }
    })

    this.setState({
      voteType: null
    })
  }

  voteAgain(id) {
    this.setState({
      [id]: {
        ...this.state[id],
        voted: false
      }
    })
  }


  render() {
    return (
      <Container>
        <h2 className="votes">Votes</h2>
        <Row className="people">
          {PERSON_LIST.map((item) => {
            const progressNumber = this.state[item.id] ? this.state[item.id].progressNumber : 50
            return (
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
                  {
                    this.state[item.id] && this.state[item.id].like > this.state[item.id].dislike ?
                      <img className="iconHand" src="/Images/Bg-hand-up.png" alt="iconHandUp" />
                      : this.state[item.id] && this.state[item.id].like < this.state[item.id].dislike ?
                        <img className="iconHand" src="/Images/Bg-hand-down.png" alt="iconHandDown" />
                        :
                        null
                  }
                  <h5 className="personCategory"><span className="personCategoryBold">{item.months} ago</span> in {item.category}</h5>
                  {
                    this.state[item.id] && this.state[item.id].voted ?
                      <>
                        <h6 className="thanksInfo">Thank you for voting!</h6>
                        <button className="voteAgain" onClick={() => this.voteAgain(item.id)}>Vote again</button>
                      </>
                      :
                      <>
                        <h6 className="personInfo">{item.info}</h6>
                        <button className="countUp" onClick={() => this.voteType('increment')}><img className="handUp" src="/Images/up.png" /></button>
                        <button className="countDown" onClick={() => this.voteType('decrement')}><img className="handDown" src="/Images/down.png" /></button>
                        <button className="voteNow" onClick={() => this.voteNow(item.id)}>Vote now</button>
                      </>

                  }
                  <div className="progressBarContainer">
                    <ProgressBar now={progressNumber} />
                    {
                      this.state[item.id] && !this.state[item.id].like ?
                        <>
                        </>
                        :
                        <>
                          <img className="progressHandUp" src="/Images/up.png" alt="handUp" />
                          <h4 className="numberUp">{`${progressNumber}%`}</h4>
                        </>
                    }
                    {
                      this.state[item.id] && !this.state[item.id].dislike ?
                        <>
                        </>
                        :
                        <>
                          <img className="progressHandDown" src="/Images/down.png" alt="handDown" />
                          <h4 className="numberDown">{`${100 - progressNumber}%`}</h4>
                        </>
                    }
                  </div>
                </div>
              </div>
            )
          }
          )}
        </Row>
        <ToastContainer />
      </Container>
    );
  }
}
export default VotingCards;