import React from 'react';
import { Link } from 'react-router-dom';
import grain from '../assets/images/grain.png';


function Header(){
  return(
    <div>
      <style jsx global>{`
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
        Link {
          color: white;
        }
        img {
          width: 80px;
        }
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
      `}</style>
      <h1 className="nav">The Help Queue</h1>
      <Link to="/"><button>Home</button></Link>
      <Link to="/newticket"><button>Create Ticket</button></Link>
      <Link to="/admin"><button>Admin</button></Link>
      <img src={grain}/>
    </div>
  );
}

export default Header;