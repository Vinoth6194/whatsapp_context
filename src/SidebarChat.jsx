import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Room Name');
    if (roomName) {
      console.log('Room Name');
      console.log(roomName);
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
      ></Avatar>
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last sent message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
