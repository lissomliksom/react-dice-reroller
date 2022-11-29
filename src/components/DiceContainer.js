import Die from "./Die";

const DiceContainer = ({
  diceValue,
  setDiceValue,
  isRolling,
  setIsRolling,
  onSingleDiceClick,
}) => {
  return (
    <div className="flex space-x-5">
      <Die
        diceValue={diceValue[0]}
        setDiceValue={setDiceValue}
        isRolling={isRolling[0]}
        setIsRolling={setIsRolling}
        onClick={() => onSingleDiceClick(0)}
      />

      <Die
        diceValue={diceValue[1]}
        setDiceValue={setDiceValue}
        isRolling={isRolling[1]}
        setIsRolling={setIsRolling}
        onClick={() => onSingleDiceClick(1)}
      />
    </div>
  );
};

export default DiceContainer;
