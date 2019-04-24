import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';



function App(){
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
      `}</style>
      <Header/>
      <TicketList/>
      <Switch>
        <Route exact path='/'  />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;