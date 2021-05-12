import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
function Chat() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="div chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
      <div className="chat__headerinfo">
        <h2>Room name</h2>
        <p>Last seen...</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachFileOutlinedIcon />
        </IconButton>
        <IconButton>
          <MoreVertOutlinedIcon />
        </IconButton>
      </div>
      <div className="div chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
