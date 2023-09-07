import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CharCard from './CharCard';
import type { CharacterType } from '../types/character';
import type { PickCharType } from '../types/charHandlers';

type CharListProps = {
  characters: CharacterType[];
  pickCurrentChar: PickCharType;
};

export default function CharList({ characters, pickCurrentChar }: CharListProps): JSX.Element {
  return (
    <Row>
      {characters.map((char) => (
        <Col key={char.id} xs={4}>
          <CharCard char={char} pickCurrentChar={pickCurrentChar} />
        </Col>
      ))}
    </Row>
  );
}
