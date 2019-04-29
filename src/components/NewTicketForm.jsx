import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  
  return (
    <div>

      <style jsx global>{`
        .nav {
          color: white;
          background-color: black;
          font-family: monospace;
          font-size: 34px;
          padding: 20px;
          box-shadow: 10px 10px 8px 10px #888888;
          margin-bottom: 40px;
        }
        input, textarea {
          padding: 1em;
          background-color: white;
          border: blue 2px solid;
          color: blue;
          cursor: type;
          margin-right: 1em;
        }
        ::placeholder {
            color: red;
        }
        form {
            padding: 20px;
        }
        .formName {
            background-color: red;
          }
        
        }
      `}</style>
      <div className="formName">
        <form onSubmit={handleNewTicketFormSubmission}>
          <input
            type='text'
            id='names'
            placeholder='Pair Names'
            ref={(input) => { _names = input; }} />
          <input
            type='text'
            id='location'
            placeholder='Location'
            ref={(input) => { _location = input; }} />
          <textarea
            id='issue'
            placeholder='Describe your issue.'
            ref={(textarea) => { _issue = textarea; }} />
          <button type='submit'>Help!</button>
        </form>
      </div>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;