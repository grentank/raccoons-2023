import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';

export default function ChatMessage({ deleteMessageHandler, message, loggedUser }) {
  const isAuthor = loggedUser.id === message.User.id;
  const justifyContent = isAuthor ? 'justify-content-end' : 'justify-content-start';
  return (
    <div className={`d-flex ${justifyContent}`}>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
            <p>{message.User.name}</p>
            <CloseButton
              disabled={!isAuthor}
              onClick={() => deleteMessageHandler(message.id)}
              aria-label="Close"
            />
          </Card.Subtitle>
          <Card.Text>{message.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
