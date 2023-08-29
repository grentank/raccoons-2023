import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AccountForm from '../UI/AccountForm';

export default function AccountPage() {
  const [aborted, setAborted] = useState(false);

  return (
    <Row className="justify-content-center align-items-center">
      {!aborted && <AccountForm />}
      <Col xs={12} className="text-center">
        <Button variant="danger" onClick={() => setAborted((prev) => !prev)}>
          Toggle
        </Button>
      </Col>
    </Row>
  );
}
