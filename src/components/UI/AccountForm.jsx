import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AccountForm() {
  const [formValues, setFormValues] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios('/api/auth/user', { signal })
      .then((res) => {
        setFormValues(res.data);
        console.log('fetch completed');
      })
      .catch(console.log);
    return () => controller.abort();
  }, []);
  return (
    <Col xs={6} className="text-center">
      {formValues ? (
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <Form.Control
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Name"
              name="name"
              type="text"
              aria-label="Name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
            <Form.Control
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
              name="email"
              type="email"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">Password</InputGroup.Text>
            <Form.Control
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon3"
              name="password"
              type="password"
            />
          </InputGroup>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </Col>
  );
}
