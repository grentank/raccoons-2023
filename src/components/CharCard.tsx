import React, { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { CharacterType } from '../types/character';
import type { PickCharType } from '../types/charHandlers';

type CharCardProps = {
  char: CharacterType;
  pickCurrentChar: PickCharType;
};

export default function CharCard({ char, pickCurrentChar }: CharCardProps): JSX.Element {
  const [currentImage, setCurrentImage] = useState(0);
  const handleCycleImage = (direction: 'left' | 'right'): void => {
    if (direction === 'left') {
      return setCurrentImage(currentImage === 0 ? char.images.length - 1 : currentImage - 1);
    }
    setCurrentImage(currentImage === char.images.length - 1 ? 0 : currentImage + 1);
  };
  console.log(char.images[currentImage]);
  return (
    <Card
      style={{ width: '18rem', backgroundColor: char.sex === 'Male' ? 'lightblue' : 'lightpink' }}
    >
      <Card.Img variant="top" src={char.images[currentImage]} />
      <Card.Body>
        <Card.Title>{char.name}</Card.Title>
        <Card.Text>{`${char.about[0]}...`}</Card.Text>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={() => handleCycleImage('left')}>
            Left
          </Button>
          <Button variant="secondary" onClick={() => pickCurrentChar(char)}>
            More
          </Button>
          <Button variant="secondary" onClick={() => handleCycleImage('right')}>
            Right
          </Button>
        </ButtonGroup>
      </Card.Body>
      <Card.Footer>{char.sex}</Card.Footer>
    </Card>
  );
}
