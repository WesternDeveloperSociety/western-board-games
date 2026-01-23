import "../styles/ProfileBoardGameCard.css"

const ProfileBoardGameCard = ({ image, title, genre, players, playtime, complexity }) => {
  return (
    <div className="game_container">
      <div className="game_image_container">
        <img src={image} alt={title} className="game_img" />
      </div>

      <div className="game_info">
        <h3 className="game_title">{title}</h3>

        <div className="game_info_grid">
          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Genre</span>
            <span className="bgcard-info-value">{genre}</span>
          </div>

          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Players</span>
            <span className="bgcard-info-value">{players}</span>
          </div>

          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Playtime</span>
            <span className="bgcard-info-value">{playtime}</span>
          </div>

          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Complexity</span>
            <span className="bgcard-info-value">{complexity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoardGameCard;