import "../styles/ProfileBoardGameCard.css"

const ProfileBoardGameCard = ({ image, title, genre, players, playtime, complexity, date_borrowed, date_due, date_returned }) => {
  let return_value = date_returned;
  let return_date = null;
  let days_to_due_date = null;
  let today = new Date();
  let overdue = false;
  let due_today = false;
  let due_tomorrow = false;
  let due_soon = false;
  if (return_value === null) {
    return_date = new Date(date_due);
    days_to_due_date = parseInt((return_date - today) / (1000 * 60 * 60 * 24));
    if (days_to_due_date < 0) {
      overdue = true;

    } else if (days_to_due_date == 0) {
      due_today = true;
    } else if (days_to_due_date == 1) {
      due_tomorrow = true;
    } else if (days_to_due_date < 4) {
      due_soon = true;
    }
  }
  
  return (
    <div className="game_container">

      <div className="game_info">
        <div className="game_image_container">
          <img src={image} alt={title} className="game_img" />
        </div>

        <div className="game_text_container">
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

      <div className="checkout_info">
        <span className="checkout_info_label">Date Borrowed: </span>
        <span className="checkout_info_label">{date_borrowed}</span>
      </div>

      <div className="return_info">
        <span className="return_info_label">{return_value === null ? "Date Due: " : "Date Returned: "}</span>
        <span className="return_info_label">{return_value === null ? date_due : date_returned}</span>
        <span className="return_info_label">{overdue && <span className="warning"><br /><i class="fa-solid fa-triangle-exclamation"></i> Overdue!</span>}</span>
        <span className="return_info_label">{due_today && <span className="warning"><br /><i class="fa-solid fa-triangle-exclamation"></i> Due today!</span>}</span>
        <span className="return_info_label">{due_tomorrow && <span className="warning"><br /><i class="fa-solid fa-triangle-exclamation"></i> Due in {days_to_due_date} day!</span>}</span>
        <span className="return_info_label">{due_soon && <span className="warning"><br />Due in {days_to_due_date} days!</span>}</span>
      </div>
    </div>
  );
};

export default ProfileBoardGameCard;