import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import type { ApiCharacterType, AppSexType, CharacterType } from './types/character';
import CharList from './components/CharList';
import CharModal from './components/CharModal';
import type { PickCharType } from './types/charHandlers';
import FormChar from './components/FormChar';

function App(): JSX.Element {
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  useEffect(() => {
    axios<ApiCharacterType[]>('https://naruto-api.fly.dev/api/v1/characters')
      .then((res) => {
        const updatedCharacters = res.data.map((char) => {
          const sexInfo = char.info.Sexo === 'Feminino' ? 'Female' : 'Male';
          return {
            ...char,
            sex: sexInfo as AppSexType,
          };
        });
        setCharacters(updatedCharacters);
      })
      .catch(console.log);
  }, []);

  const [currentChar, setCurrentChar] = useState<CharacterType | null>(null);

  const onHide = (): void => {
    setCurrentChar(null);
  };

  const pickCurrentChar: PickCharType = (char) => {
    setCurrentChar(char);
  };

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>,
    input: string,
  ): Promise<void> => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as { charid: string };
    axios<ApiCharacterType>(`https://naruto-api.fly.dev/api/v1/characters/${input}`)
      .then((res) => {
        const charSex = res.data.info.Sexo === 'Masculino' ? 'Male' : 'Female';
        setCurrentChar({ ...res.data, sex: charSex });
      })
      .catch(console.log);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={4}>
          <h1>Characters</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={4}>
          <FormChar submitHandler={submitHandler} />
        </Col>
      </Row>
      <CharList characters={characters} pickCurrentChar={pickCurrentChar} />
      <CharModal show={!!currentChar} char={currentChar} onHide={onHide} />
    </Container>
  );
}

export default App;
