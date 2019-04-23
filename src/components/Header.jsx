import React from 'react';

function Header(){
  return(
    <div>
      <style jsx global>{`
        .nav {
          color: white;
          background-color: black;
          font-family: monospace;
          font-size: 34px;
          padding: 20px;
        }
      `}</style>
      <h1 className="nav">Help Queue</h1>
    </div>
  );
}

export default Header;