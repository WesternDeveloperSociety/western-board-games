import React, {useState} from 'react';
import '../styles/Checkout.css';

//backgroud import
import backgroundCheckout from "../assets/background-checkout.png";

//boardGameData import
import boardGameData from "../data/boardGamesData";


const Checkout = () => {
  //dummy variables here

  //rmb list of numbers, update screen whenever numbers change
  //setGames function
  //games is a constant
  const [games, setGames] = useState([1,2,3]);
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


  /*method that creates a list of games from the number of games
 there's another way to write this right
 WOULD BE REALLY COOL TO ADD A PARALAX BACKGROUND
 */
  function loadGames() {
    //empty array
    const arr = [];

    for (let i = 0; i < games.length; i++) {

      //get id at index
      let id = games[i];

      //add card to list
      arr.push(
        <div key={id} className="checkoutCard">
          
          <div style={{flexGrow: 1}}>
             <h3>Game #{id}</h3>
             <p className="textBody"> Details TBD</p>
          </div>

          <div 
            //super cool delete button
             onClick={() => handleDelete(id)} 
             style={{ 
               cursor: 'pointer', 
               fontWeight: 'bold', 
               padding: '10px',
               color: '#666' 
             }}
          >
             X
          </div>
        </div>
      );
    }
    return arr;
  }


  //viewing screen
  return (
    //background that's just the png

    <div className = "checkoutBackground">
      <div ClassName = "navBar">

      </div>

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
              <div className="returnBox">
                <strong> PICKUP </strong> <br/> RM. 123 | 4:00PM                
              </div>

              <div className="returnBox">      
                <strong>RETURN</strong><br/> RM. 123 | 4:00PM
              </div>
            
          </div>


          <div className="rightColumn">
              <h2 className="textHeader"> Your Games: {numGames} </h2>
              <div className="gameList">
                {loadGames()}
              </div>

              {/*add games button*/}
              <div className="buttonContainer">
                <button className="addGameBtn" onClick={handleAdd}> ADD GAME </button>
              </div>

              {/*confirm reservationbutton*/}
              <button className="confirmButton"> Confirm Reservation </button>
          </div>

        </div>

      </div>
    </div> 

  );
};

export default Checkout;
//cd westernBoardGames/wbg_react_frontend
//CHANGE BACK .APP to home before comitting