import { useState } from 'react';
import Deck from './deck/Deck'


function Game() {
  const CARDS = Deck()
  const [gameStarted, setGameState] = useState('false')

  return null
}

export default Game;
