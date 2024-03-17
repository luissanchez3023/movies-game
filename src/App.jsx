import { useState } from 'react';
import './App.css'

const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
{ name: "The Matrix", emoji: "🕶💊👽" },
{ name: "Titanic", emoji: "🚢❄💔" },
{ name: "Jurassic Park", emoji: "🦖🌴🚙" },
{ name: "The Lion King", emoji: "🦁👑🌅" },
{ name: "Star Wars", emoji: "⚔🚀🌌" },
{ name: "The Avengers", emoji: "🦸‍♂🦸‍♀💥" },
{ name: "Harry Potter", emoji: "⚡🧙‍♂🔮" },
{ name: "The Terminator", emoji: "🤖🔫🕶" },
{ name: "Indiana Jones", emoji: "🤠🔍💎" },
{ name: "Back to the Future", emoji: "⏰🚗💥" },
{ name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
{ name: "The Godfather", emoji: "🍕🤵🔫" },
{ name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
{ name: "Pulp Fiction", emoji: "🍔🔫🕶" },
{ name: "Schindler's List", emoji: "📜🚂🔴" },
{ name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂🧙‍♂🗡" },
];

function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const checkAnswer = () => {
    const correctAnswer = movies[currentMovieIndex].name.toLowerCase();
    if (userInput.toLowerCase() === correctAnswer) {
      setScore(score + 1);
      setCurrentMovieIndex(currentMovieIndex + 1);
      setUserInput('');
      setMessage('¡Correcto! Siguiente película');
    } else {
      if (lives > 0) {
        setLives(lives - 1);
        setUserInput('');
        setMessage('¡Vaya! Te equivocaste. Perdiste una vida');
        if (lives === 1) {
          setMessage('¡Has perdido todas tus vidas! Juego Finalizado');
        }
      }
    }
  };
  

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  return (
    <div className="App">
      <h1>Adivina la peli segun el emoji</h1>
      <p>Puntaje: {score}</p>
      <p>Vidas: {lives}</p>
      <p>Emoji: {movies[currentMovieIndex].emoji}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Digita el nombre de la película"
      />
      <button onClick={checkAnswer}>Verificar</button>
      <p>{message}</p>
    </div>
  );
}

export default App;