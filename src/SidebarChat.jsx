import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState('');
  const [sideMessages, setSideMessages] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot =>
          setSideMessages(snapshot.docs.map(doc => doc.data()))
        );
    }
  }, []);

  const createChat = () => {
    const roomName = prompt('Room Name');
    if (roomName) {
      console.log('Room Name');
      console.log(roomName);
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        ></Avatar>
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>{sideMessages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
