import React from 'react';
import './Checkout.css'; 

const Checkout = () => { 

  //dummy variables here
  //
  let numGames = 3;

   /*method that creates a list of games from the number of games
  there's another way to write this right
  */
  function loadGames() {
    const arr = [];
    for(let i = 0; i < numGames; i++){
      arr.push(
        <div key={i} className="checkoutCard">
          <h3>Game #{i + 1}</h3>
          <p className="textBody">Details TBD</p>
        </div>
      );
    }
    return arr;
  }

  //viewing screen
  return (
    <div className="checkoutMain"> 
      <h1 className="textTitle">
        Confirm Your Rentals |{numGames}/2|
      </h1>

      <h2 className="textSubtitle">
        Games: {numGames}
      </h2>
           
      <div className="gameList">
        {loadGames()}
      </div>

    </div>
  );
};

export default Checkout;
//cd westernBoardGames/wbg_react_frontend