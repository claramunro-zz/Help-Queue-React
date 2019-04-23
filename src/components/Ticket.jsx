import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx global>{`
        .try {
          color: black;
          font-family: monospace;
          font-size: 15px;
          padding: 5px;
          padding-left: 25px;
          background-color: red;
        }
        .hr {
          margin-top: 50px;
        }
      `}</style>
      <div className="ticket">
      <h3 className="clickable try">{props.location} | {props.names}</h3>
      <p className="clickable try"><em>{props.issue}</em></p>
      <hr className="hr"/>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;