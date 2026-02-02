import '../styles/Profile.css';
import ProfileBoardGameCard from "../components/ProfileBoardGameCard.jsx";
import profileBoardGamesData from "../data/profileBoardGamesData.js";

function Profile() {
    return (
        <>
            <div className="title">
                <h1>Profile</h1>
            </div>

            <div className="container">
                <div className="user_info">
                    <h2>Name: John Doe</h2>
                    <p>Email: jdoe3@uwo.ca</p>
                </div>

                <div className="tables">
                    <h2>Current Rentals</h2>
                    <div className="gamesList">
                        {profileBoardGamesData.filter((game) => game.date_returned === null).map((game) => (
                            <ProfileBoardGameCard
                                key={game.id}
                                image={game.image}
                                title={game.title}
                                genre={game.genre}
                                players={game.players}
                                playtime={game.playtime}
                                complexity={game.complexity}
                                rating={game.rating}
                                date_borrowed={game.date_borrowed}
                                date_due={game.date_due}
                                date_returned={game.date_returned}
                            />
                        ))}
                    </div>
                </div>

                <div className="tables">
                    <h2>Previous Rentals</h2>
                    <div className="gamesList">
                        {profileBoardGamesData.filter((game) => game.date_returned !== null).map((game) => (
                            <ProfileBoardGameCard
                                key={game.id}
                                image={game.image}
                                title={game.title}
                                genre={game.genre}
                                players={game.players}
                                playtime={game.playtime}
                                complexity={game.complexity}
                                rating={game.rating}
                                date_borrowed={game.date_borrowed}
                                date_due={game.date_due}
                                date_returned={game.date_returned}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;