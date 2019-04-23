import React from 'react';
import { Link } from 'react-router-dom';

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
      `}</style>
      <h1 className="nav">The Help Queue</h1>
      <Link to="/"><button>Home</button></Link>
      <Link to="/newticket"><button>Create Ticket</button></Link>
    </div>
  );
}

export default Header;