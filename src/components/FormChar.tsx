import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import type { SubmitFormType } from '../types/charHandlers';

type FormCharProps = {
  submitHandler: SubmitFormType;
};

export default function FormChar({ submitHandler }: FormCharProps): JSX.Element {
  const [input, setInput] = useState('');
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return (
    <Form onSubmit={(e) => void submitHandler(e, input)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Character ID</Form.Label>
        <Form.Control name="charid" onChange={changeHandler} value={input} type="text" placeholder="Enter ID" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
