import { useState, useCallback } from "react";

import DiceContainer from "./components/DiceContainer";
import DiceButton from "./components/DiceButton";

import DiceThrowMultiple from "./assets/audio/KenneyDiceThrowMultiple.ogg";
import DieThrowSingle from "./assets/audio/KenneyDieThrowSingle.ogg";

function App() {
  const [diceValue, setDiceValue] = useState([1, 1]);
  const [isRolling, setIsRolling] = useState([false, false]);

  const playAudio = useCallback((audio) => {
    const soundClip = new Audio(audio);
    soundClip.play();
  }, []);

  const animateAllDice = useCallback(() => {
    setIsRolling([true, true]);
    setTimeout(() => {
      setIsRolling([false, false]);
    }, 500);
  }, []);

  const rollAllDice = useCallback(() => {
    animateAllDice();
    playAudio(DiceThrowMultiple);

    setTimeout(() => {
      setDiceValue([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ]);
    }, 200);
  }, [animateAllDice, playAudio]);

  const handleButtonClick = useCallback(() => {
    rollAllDice();
  }, [rollAllDice]);

  const handleSingleDiceClick = useCallback(
    (index) => {
      setIsRolling((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
      playAudio(DieThrowSingle);
      setTimeout(() => {
        setDiceValue((prevState) => {
          const newState = [...prevState];
          newState[index] = Math.floor(Math.random() * 6) + 1;
          return newState;
        });
        setIsRolling((prevState) => {
          const newState = [...prevState];
          newState[index] = false;
          return newState;
        });
      }, 200);
    },
    [playAudio]
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center space-y-5">
        <DiceContainer
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          isRolling={isRolling}
          setIsRolling={setIsRolling}
          onSingleDiceClick={handleSingleDiceClick}
        />

        <DiceButton action={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
