const DiceButton = ({ action }) => {
  return (
    <button 
      onClick={() => action()}
      className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-emerald-900 text-white hover:bg-emerald-800 transition duration-150 ease-in-out">
      Roll dice
    </button>
  );
};

export default DiceButton;