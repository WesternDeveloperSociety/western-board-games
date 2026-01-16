// Meet the Team Page
import './Team.css';
import TeamMemberCard from '../components/TeamMemberCard';
import { members } from '../data/members';

const Team = () => {
  return (
    <div className="team-page">
      <h1 className="team-title">Meet the Team</h1>
      <p className="team-description">
        We are a group of students with a deep love for boardgames.
        Lorem Ipsum.
      </p>
      <div className="team-grid">
        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;