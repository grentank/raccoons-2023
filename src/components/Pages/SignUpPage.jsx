import axios from 'axios';
import React, { useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    repeat: '',
  });

  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.repeat) {
      alert('Passwords do not match');
      return;
    }
    const response = await axios.post('/api/auth/signup', formData);
    if (response.status === 200) {
      window.location.href = '/';
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={formData.email}
          onChange={changeHandler}
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          value={formData.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={formData.password}
          onChange={changeHandler}
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat password</Form.Label>
        <Form.Control
          value={formData.repeat}
          onChange={changeHandler}
          type="password"
          name="repeat"
          placeholder="Repeat password"
          isValid={formData.password === formData.repeat && formData.repeat !== ''}
          isInvalid={formData.password !== formData.repeat && formData.repeat !== ''}
        />
        <Form.Control.Feedback type="invalid">Passwords should match!</Form.Control.Feedback>
      </Form.Group>
      <Row className="justify-content-center mt-3 mb-3 text-center">
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-3 text-center">
        <Col>
          <Nav.Link href="/login"> Already have an account? Sign in</Nav.Link>
        </Col>
      </Row>
    </Form>
  );
}
