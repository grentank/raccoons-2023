import React from 'react';
import { Stack } from 'react-bootstrap';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

export default function ChatComponent({ deleteMessageHandler, messages, loggedUser, submitMessageHandler }) {
  const writes = true;
  return (
    <Stack>
      <MessagesList deleteMessageHandler={deleteMessageHandler} messages={messages} loggedUser={loggedUser} />
      <div className="fs-6 fw-light">{writes ? 'Alex печатает...' : `\xa0`}</div>
      <MessageForm submitMessageHandler={submitMessageHandler} />
    </Stack>
  );
}
