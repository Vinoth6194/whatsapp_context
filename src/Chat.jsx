import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState();
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => console.log(snapshot.data()));
    }
  }, [roomId]);

  const sendMessage = e => {
    e.preventDefault();
    console.log('Your message is');
    // console.log(e);
    console.log(input);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerinfo">
          {/* <h2>Room name</h2> */}
          <h2>RoomName</h2>
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
      </div>

      <div className="chat__body">
        <div className={`chat__mesaage ${true && 'chat__reciever'}`}>
          <span className="chat__name">Vinoth</span>
          <p>
            Hey Vinoth
            <span className="chat__timestamp">5.27PM</span>
          </p>
        </div>
      </div>
      <div className="chat__footer">
        <InsertEmoticonOutlinedIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a Messsage
          </button>
        </form>
        <MicNoneOutlinedIcon />
      </div>
    </div>
  );
}

export default Chat;
