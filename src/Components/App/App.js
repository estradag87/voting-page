import React from 'react';
import './App.css';
import Header from '../Home/Header';
import Banner from '../Home/Banner';
import VotingCards from '../Home/VotingCards';
import Notification from '../Home/Notification';
import Footer from '../Home/Footer';
import NameSubmit from '../Home/NameSubmit';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="HeaderBanner">
          <Header id="Header" xs />
          <Banner id="Banner" />
        </div>
        <Notification />
        <VotingCards />
        <NameSubmit />
        <Footer />
      </div>
    );
  }
}

export default App;
