import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import type { CharacterType } from '../types/character';

type CharModalProps = {
  show: boolean;
  onHide: () => void;
  char: CharacterType | null;
};

export default function CharModal({ show, onHide, char }: CharModalProps): JSX.Element {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{char?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Character Info</h4>
        <p>{char?.about.join('\n')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
