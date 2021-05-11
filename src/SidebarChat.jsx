import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';

function SidebarChat() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
      ></Avatar>
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last sent message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
