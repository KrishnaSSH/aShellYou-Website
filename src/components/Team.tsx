import React from 'react';
import './css/Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'Krishna', job: 'Developer UI/UX Designer Website Developer', github: 'https://github.com/krishnassh', avatar: 'https://avatars.githubusercontent.com/u/125943937?v=4' },
    { name: 'Hridayan', job: 'Developer/Functionality Dev', github: 'https://github.com/dp-hridayan', avatar: 'https://avatars.githubusercontent.com/u/157479796?v=4' }, 
    { name: 'Starry Shivam', job: 'Bug Hunter/Developer', github: 'https://github.com/starry-shivam', avatar: 'https://avatars.githubusercontent.com/u/58552395?v=4' },
    { name: 'WeiguangTWK', job: 'App Tester/Chinese Translator', github: 'https://github.com/WeiguangTWK', avatar: 'https://avatars.githubusercontent.com/u/41853928?v=4' },
  ];

  return (
    <div id='team' className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <a href={member.github} key={index} className="team-member" target="_blank" rel="noopener noreferrer">
            <div className="avatar">
              <img src={member.avatar} alt={`${member.name}'s avatar`} className="avatar-img" />
            </div>
            <h3 className="name">{member.name}</h3>
            <p className="job">{member.job}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Team;
