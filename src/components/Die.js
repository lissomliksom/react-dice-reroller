import Dice1 from '../assets/images/dice-1.svg';
import Dice2 from '../assets/images/dice-2.svg';
import Dice3 from '../assets/images/dice-3.svg';
import Dice4 from '../assets/images/dice-4.svg';
import Dice5 from '../assets/images/dice-5.svg';
import Dice6 from '../assets/images/dice-6.svg';

const Die = ({ diceValue, setDiceValue, isRolling, setIsRolling, action }) => {

  const showDice = (num) => {
    switch(num) {
      case 1:
        return Dice1;
      case 2:
        return Dice2;
      case 3:
        return Dice3;
      case 4:
        return Dice4;
      case 5:
        return Dice5;
      case 6:
        return Dice6;
      default:
        return Dice1;
    }
  };

  return (
    <button onClick={() => action()}>
      <img 
        src={showDice(diceValue)}
        alt={`dice ${diceValue}`}
        className={`h-20 w-20 ${isRolling ? 'animate-shake' : ''}`}
      />
    </button>
  );
};

export default Die;