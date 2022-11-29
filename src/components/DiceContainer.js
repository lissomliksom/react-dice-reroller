import Die from './Die';
import DieThrowSingle from '../assets/audio/KenneyDieThrowSingle.ogg';

const DiceContainer = ({ diceValue, setDiceValue, isRolling, setIsRolling }) => {

  const rerollSingleDie = () => {
    console.log('Functionality not yet implemented');
  };

  return (
    <div className="flex space-x-5">

      <Die
        diceValue={diceValue[0]}
        setDiceValue={setDiceValue}
        isRolling={isRolling[0]}
        setIsRolling={setIsRolling}
        action={rerollSingleDie}
      />

      <Die
        diceValue={diceValue[1]}
        setDiceValue={setDiceValue}
        isRolling={isRolling[1]}
        setIsRolling={setIsRolling}
        action={rerollSingleDie}
      />

      
    </div>
  );
};

export default DiceContainer;