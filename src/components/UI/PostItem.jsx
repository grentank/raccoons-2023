import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import locale from 'date-fns/locale/ru';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function PostItem({ post, handleError, deletePostHandler, user }) {
  const cretateDate = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale });
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img
          style={{ height: '300px', objectFit: 'cover' }}
          variant="top"
          src={`/img/${post.img}`}
          onError={handleError}
        />
        <Card.Body>
          <Card.Text>{post.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{post?.author?.name}</small>
        </Card.Footer>
      </Card>
      <Col className="d-flex justify-content-between align-items-end">
        <Button
          variant="danger"
          disabled={user?.id !== post.authorId}
          onClick={() => deletePostHandler(post.id)}
          className="mt-2"
        >
          Delete
        </Button>
        <span style={{ color: 'gray' }} className="ml-2">
          {cretateDate}
        </span>
      </Col>
    </Col>
  );
}
