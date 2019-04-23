import React from 'react';

function NewTicketForm(){
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
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
      </div>
    </div>
  );
}

export default NewTicketForm;