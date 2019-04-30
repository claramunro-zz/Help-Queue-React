import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return(
    <div>
      <style jsx global>{`
        .columns {
          display: inline;
          grid-template-columns: repeat(1fr);
        }
      body {
        font-family: monospace;
        border: blue 2px solid;
      }
        .nav {
            position: relative;
            font-family: sans-serif;
            text-transform: uppercase;
            font-size: 2em;
            letter-spacing: 4px;
            overflow: hidden;
            background: linear-gradient(90deg, #000, #fff, #000);
            background-repeat: no-repeat;
            background-size: 80%;
            animation: animate 3s linear infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: rgba(255, 255, 255, 0);
          }
          
          @keyframes animate {
            0% {
              background-position: -500%;
            }
            100% {
              background-position: 500%;
            }
        }
        button {
          padding: 1em;
          background-color: black;
          border: blue 2px solid;
          color: white;
          cursor: pointer;
          margin-right: 1em;
        }
        button:hover {
          padding: 1em;
          background-color: white;
          border: red 2px solid;
          color: black;
          cursor: pointer;
          margin-right: 1em;
        }
        Link {
          color: white;
        }
        html {
          height: 100vh;
          border: 1px red solid;
        }
          body {
            padding: 5%;
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
          .nav {
            color: white;
            background-color: black;
            font-family: monospace;
            font-size: 34px;
            padding: 2em;
            box-shadow: 10px 10px 8px 10px #888888;
            margin-bottom: 40px;
            border: 1px solid red;
          }
          input, textarea {
            padding: 1em;
            margin: 1em;
            background-color: white;
            border: blue 2px solid;
            color: red;
            cursor: type;
            width: 80%;
          }
          ::placeholder {
              color: red;
          }
          form {
              padding: 3em 0 0 0;
          }
          .formName {
              background-color: red;
            }
            #highlight{
              background-color: yellow;
            }
      `}</style>
      <h1 className="nav">The Help Queue</h1>
      <Link to="/"><button>Home</button></Link>
      <Link to="/newticket"><button>Create Ticket</button></Link>
      <Link to="/admin"><button>Admin</button></Link>
    </div>
  );
}

export default Header;