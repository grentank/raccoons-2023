import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UsersList from './ui/UsersList';
import ChatComponent from './ui/ChatComponent';
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  HIDE_MESSAGE,
  SEND_MESSAGE,
  SET_USERS,
} from '../../utils/constants';

// const initUsers = [{ name: 'Alex' }, { name: 'Bob' }, { name: 'Carl' }];

export default function ChatPage({ messages: initMessages, user: loggedUser }) {
  const [messages, setMessages] = useState(initMessages);
  const [users, setUsers] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    function createSocket() {
      const socket = new WebSocket('ws://localhost:3000');
      socket.onopen = () => {
        socketRef.current = socket;
        console.log('Socket connected');
      };
      socket.onclose = () => {
        console.log('Socket disconnected');
        setTimeout(createSocket, 2000);
      };
      socket.onerror = (error) => console.error(error);
      socket.onmessage = (event) => {
        const actionFromBackend = JSON.parse(event.data);
        const { type, payload } = actionFromBackend;
        switch (type) {
          case SET_USERS:
            setUsers(payload);
            break;
          case ADD_MESSAGE:
            setMessages((prev) => [...prev, payload]);
            break;
          case HIDE_MESSAGE:
            setMessages((prev) => prev.filter((post) => post.id !== payload));
            break;
          default:
            break;
        }
      };
    }

    createSocket();
  }, []);

  const submitMessageHandler = (inputText) => {
    if (!socketRef.current) return;
    const action = { type: SEND_MESSAGE, payload: inputText };
    socketRef.current.send(JSON.stringify(action));
  };

  const deleteMessageHandler = (id) => {
    if (!socketRef.current) return;
    const action = { type: DELETE_MESSAGE, payload: id };
    socketRef.current.send(JSON.stringify(action));
  };

  return (
    <Container>
      <Row>
        <Col xs={2}>
          <UsersList users={users} />
        </Col>
        <Col xs={10}>
          <ChatComponent
            deleteMessageHandler={deleteMessageHandler}
            submitMessageHandler={submitMessageHandler}
            messages={messages}
            loggedUser={loggedUser}
          />
        </Col>
      </Row>
    </Container>
  );
}
