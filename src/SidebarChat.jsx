import React from 'react';
import './SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars.dicebear.com/api/human/kasjdkljadljs.svg"></Avatar>
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last sent message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
