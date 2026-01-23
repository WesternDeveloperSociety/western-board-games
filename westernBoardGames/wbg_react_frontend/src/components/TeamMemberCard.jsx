// Component for the team member cards
const TeamMemberCard = ({ name, position, image }) => {
  return (
    <div className="team-card">
      <h3 className="team-card-name">{name}</h3>
      <img src={image} alt={name} className="team-card-image" />
      <p className="team-card-position">{position}</p>
    </div>
  );
};

export default TeamMemberCard;