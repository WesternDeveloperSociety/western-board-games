// Component for the team member cards
const TeamMemberCard = ({ name, position, image, cardSymbol, imageShape = 'diamond' }) => {
  return (
    <div className="team-card">
      <div className="team-card-corner top-left">{cardSymbol}</div>
      <div className="team-card-content">
        <p className="team-card-name">
          {name.split(' ')[0]}<br />{name.split(' ')[1]}
        </p>
        <div className="team-card-image-container">
          <img 
            src={image} 
            alt={name} 
            className={`team-card-image ${imageShape}`} 
          />
        </div>
        <p className="team-card-position">{position}</p>
      </div>
      <div className="team-card-corner bottom-right">{cardSymbol}</div>
    </div>
  );
};

export default TeamMemberCard;