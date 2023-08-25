import React from 'react';
import './style.css';
import Jokes from './components/Jokes';
import data from './data';

export default function App() {
  const jokeElements = data.map((joke) => {
    return (
      <Jokes key={joke.id} Setup={joke.Question} Punchline={joke.Punchline} />
    );
  });

  return <div>{jokeElements}</div>;
}
