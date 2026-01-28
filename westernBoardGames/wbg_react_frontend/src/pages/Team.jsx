// Meet the Team Page
import '../styles/Team.css';
import TeamMemberCard from '../components/TeamMemberCard';
import { members } from '../data/members';

const Team = () => {
  return (
    <div className="team-page">
      <div className="team-header">
        <h1 className="team-title">Meet The Team</h1>
      </div>
      <p className="team-description">
        We at Western Board Games Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex
      </p>
      <div className="team-grid">
        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
            cardSymbol={member.cardSymbol}
            imageShape={member.imageShape}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;