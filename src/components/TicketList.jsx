import React from 'react';
import Ticket from './Ticket';

let masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save records'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Image not displaying'
  },
  {
    names: 'Imani and Jacob',
    location: '9F',
    issue: 'No workyyyyyyyy'
  },
  {
    names: 'Pa and Mum',
    location: 'B9',
    issue: 'Why my code STANK?'
  }
];

function TicketList(){
  return (
    <div>
      <style jsx global>{`

      `}</style>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;