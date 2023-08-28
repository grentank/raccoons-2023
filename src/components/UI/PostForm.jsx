import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PostForm({ postSubmitHandler, user }) {
  return (
    <Form onSubmit={postSubmitHandler} className="mt-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control disabled={!user} type="text" name="description" placeholder="description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control disabled={!user} type="file" name="file" placeholder="img" />
      </Form.Group>
      <Button disabled={!user} variant="primary" type="submit">
        send
      </Button>
    </Form>
  );
}
