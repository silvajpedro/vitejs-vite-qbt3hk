import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Imagem = styled.img`
width:26vw;
border:solid red;
border-radius:20px;
`;

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://n5g5l3vlth.execute-api.us-east-1.amazonaws.com/prod/characters'
      );
      const data = JSON.parse(response.data.body); // Parsear a string JSON para um objeto JavaScript
      setCharacters(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      {characters.map((character) => (
        <figure>
          <Imagem src={character.image} alt="" />
          <figcaption key={character.id}>{character.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default App;
