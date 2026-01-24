import '../styles/Profile.css';
import ProfileBoardGameCard from "../components/ProfileBoardGameCard.jsx";
import boardGamesData from "../data/boardGamesData.js";

function Profile() {
    return (
        <>
            <div className="title">
                <h1>Profile</h1>
            </div>

            <div className="container">
                <div className="user_info">
                    <h2>Name: pull_from_backend</h2>
                    <h3>Email: pull_from_backend</h3>
                </div>

                <div className="tables">
                    <h2>Current Rentals</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Date Borrowed</th>
                                <th>Date Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {boardGamesData.map((game) => (
                                        <ProfileBoardGameCard
                                            key={game.id}
                                            image={game.image}
                                            title={game.title}
                                            genre={game.genre}
                                            players={game.players}
                                            playtime={game.playtime}
                                            complexity={game.complexity}
                                            rating={game.rating}
                                        />
                                    ))}
                                    </td>
                                <td>pull_from_backend</td>
                                <td>pull_from_backend</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tables">
                    <h2>Previous Rentals</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Date Borrowed</th>
                                <th>Date Returned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {boardGamesData.map((game) => (
                                        <ProfileBoardGameCard
                                            key={game.id}
                                            image={game.image}
                                            title={game.title}
                                            genre={game.genre}
                                            players={game.players}
                                            playtime={game.playtime}
                                            complexity={game.complexity}
                                            rating={game.rating}
                                        />
                                    ))}
                                </td>
                                <td>pull_from_backend</td>
                                <td>pull_from_backend</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Profile;