import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Admin from './Admin';

import Moment from 'moment';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }


  updateTicketElapsedWaitTime() {
    console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }


  render(){
    return (
      <div>
                <style jsx global>{`
      html {
        height: 100vh;
      }
        body {
          padding: 100px;
        }
        .clickable {
          color: black;
        }
        .clickable:hover {
          cursor: pointer;
          color: red;
        }
        .try {
          color: black;
          font-family: monospace;
          font-size: 15px;
          padding: 5px;
          padding-left: 25px;
          background-color: red;
        }
        .hr {
          margin-top: 30px;
        }
      `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' component={Admin} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
