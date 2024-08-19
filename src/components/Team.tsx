import React from 'react';
import './css/Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'Krishna', job: 'Developer UI/UX Designer Website Developer', github: 'https://github.com/krishnassh' },
    { name: 'Hridayan', job: 'Developer/Functionality Dev', github: 'https://github.com/dp-hridayan' },
    { name: 'Starry Shivam', job: 'Bug Hunter/Developer', github: 'https://github.com/starry-shivam' },
    { name: 'WeiguangTWK', job: 'App Tester/Chinese Translator ', github: 'https://github.com/WeiguangTWK' },
   
  ];

  return (
    <div className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <a href={member.github} key={index} className="team-member" target="_blank" rel="noopener noreferrer">
            <div className="avatar">{member.name.charAt(0)}</div>
            <h3 className="name">{member.name}</h3>
            <p className="job">{member.job}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Team;
