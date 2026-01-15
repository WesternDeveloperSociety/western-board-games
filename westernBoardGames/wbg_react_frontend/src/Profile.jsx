import './Profile.css';

function Profile() {
    return (
        <>
            <h1>Profile</h1>
            <h2>Name: </h2>
            <h3>Email: </h3>
            <h2>Current Rentals</h2>
            <table>
                <tr>
                    <th>Game</th>
                    <th>Date Borrowed</th>
                    <th>Date Due</th>
                </tr>
            </table>
            <h2>Previous Rentals</h2>
            <table>
                <tr>
                    <th>Game</th>
                    <th>Date Borrowed</th>
                    <th>Date Returned</th>
                </tr>
            </table>
        </>
    );
}

export default Profile;