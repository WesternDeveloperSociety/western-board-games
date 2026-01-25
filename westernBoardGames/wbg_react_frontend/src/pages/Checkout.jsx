import React, {useState} from 'react';
import '../styles/Checkout.css';

//backgroud import
import backgroundCheckout from "../assets/background-checkout.png";

//boardGameData import
import boardGameData from "../data/boardGamesData";


const Checkout = () => {
  //confirm state for confirm button
  const [isConfirmed, setIsConfirmed] = useState(false);
  function handleConfirm() {
  setIsConfirmed(true); 
  }
  
  //dummy variables here

  //rmb list of numbers, update screen whenever numbers change
  //setGames function
  //games is a constant (for testing, later save what games are in cart)
  const [games, setGames] = useState([1,2]);
  const numGames = games.length;

    //method that deletes games (if this is inefficient figure out the js syntax later)
  function handleDelete(idDelete){
    //create empty list
    let newGamesList = [];
    for (let i = 0; i < games.length; i++){
      let id = games[i];
      //iterate through, add games that aren't being deleted
      if(id != idDelete){
        newGamesList.push(id);
      }
    }
    //update
    setGames(newGamesList)
  }

  function handleAdd(){
    //copy list
    let newGamesList = [...games]; 

    //take the current max id and just add one to it (change later)
    let nextId = 1;
    if (games.length > 0) {
        nextId = Math.max(...games) + 1;
    }

    //add new id, update screen
    newGamesList.push(nextId);
    setGames(newGamesList);
  }

  //viewing screen
  return (
    //background that's just the png

    <div className = "checkoutBackground">

      {/*main container box that has title text, which holds space for the games*/}
      <div className="checkoutMain">
        <h1 className="textTitle"> Checkout </h1>
    
        {/*split container into two*/}
        <div className="checkoutColumns">

          <div className="leftColumn">

            <h3 className="textHeader">Contact Information</h3>
              <div className="infoBox">
                <p>Name: John Doe</p>
              </div>
              <div className="infoBox">
                <p>ID: 123123123123</p>
              </div>

            <h3 className="textHeader"> Return Information </h3>
            
            <div className='returnWrapper'>
              <div className="returnBox">
                <strong> PICKUP </strong> <br/> RM. 123 | 4:00PM                
              </div>

              <div className="returnBox">      
                <strong>RETURN</strong><br/> RM. 123 | 4:00PM | JAN 23
              </div>
            </div>
            
          </div>


          <div className="rightColumn">
              <h2 className="textHeader"> Your Games: {numGames}  </h2>
              <div className="gameList">

                {numGames === 0 && (
                  //i dont understand the syntax but whatever!
                  //displays if cart is empty
                    <h2 className='textSubtite'> Your cart is empty (lol)</h2>
                )}
                
                {games.map((id) => {
                  //take in data
                  let gameData = boardGameData.find(g => g.id === id);
            
                  //placeholder if data is not found
                  if (!gameData) {
                      gameData = { title: `Game #${id}`, genre: "TBD", image: "..." };
                  }

                  //return data for a card
                  return (
                      <div key={id} className="checkoutCard">
                          
                          <div style={{marginRight: '15px'}}> 
                              <img 
                              src={gameData.image} 
                              alt={gameData.title} 
                              className = "gameImage"
                              />
                          </div>

                          <div style={{flexGrow: 1}}>
                              <h3>{gameData.title}</h3>
                              <p className="textBody"> {gameData.genre}</p>
                          </div>

                          <div onClick={() => handleDelete(id)} 
                          //radius of the X to click on:
                          style={{cursor: 'pointer', padding: '1rem'}}
                          className="deleteBtn">
                              X
                          </div>

                      </div>
                  );
              })}
              </div>

              
              {/*add games button*/}
              <div className="buttonContainer">
                <button className="addGameBtn" onClick={handleAdd}> ADD GAME **FOR TESTING** </button>
              </div>

              {/*confirm reservationbutton*/}
              <button 
                className={isConfirmed ? "confirmButton success" : "confirmButton"} 
                onClick={handleConfirm}
              > 
                {/*Change text */}
                {isConfirmed ? "Confirmed! " : "Confirm Reservation"} 
                
            </button>
          </div>
        </div>
      </div>
    </div> 

  );
};

export default Checkout;
//cd westernBoardGames/wbg_react_frontend
//CHANGE BACK .APP to home before comitting