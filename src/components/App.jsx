import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          padding: 70px;
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
    </div>
  );
}

export default App;