import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "./Alert";
import { Global } from "../context/AppContext";
const Game = () => {
  const { name } = useParams();
  const { credit } = Global();

  var num = 0;
  var sum = 0;
  const [count, setCount] = useState(5);
  const [message, setMessage] = useState("");
  const [cards, setCards] = useState([]);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setCount((prevState) => prevState - 1);
    num = Math.floor(Math.random() * 10) + 1;
    setCards([...cards, num]);
    if (count === 1) {
      handleOutOfGame();
    }
  };

  const handleOutOfGame = () => {
    setMessage("You are Out of the game");
    setOpen(true);
  };

  cards.map((card) => {
    sum += card;
    return sum;
  });

  useEffect(() => {
    if (sum > 21) {
      handleOutOfGame();
    } else if (sum === 21) {
      setOpen(true);
      setMessage("You got a Black Jack");
      setCards([]);
      setCount(5);
    }
  }, [sum]);

  const handleClose = () => {
    setOpen(false);
    setCount(5);
    setCards([]);
  };
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="w-96 h-96 border shadow-md rounded-md flex flex-col px-4 gap-4">
        <div className="text-center p-2 font-bold font-mono text-3xl first-letter:text-sky-500 uppercase">
          Black<span className="text-red-500">J</span>ack
        </div>
        <h4 className="text-center p-2">
          Cards Remaining : <span className="text-sky-500 ">{count}</span>
        </h4>
        <div className="content flex gap-4 flex-col ml-20 flex-1">
          <h2>Total : {sum}</h2>

          <div className="flex flex-row gap-4">Cards</div>
          <div className="flex flex-row gap-4 max-w-xs flex-wrap">
            {cards.map((card, i) => (
              <div
                className="h-8 w-8 shadow-md rounded-sm border text-center font-bold animate-pulse"
                key={i}
              >
                {card}
              </div>
            ))}
          </div>
          <button
            className="rounded-md border-none p-1 w-36 bg-sky-500 font-semibold text-white"
            onClick={handleClick}
          >
            Draw
          </button>
          <button className="rounded-md border-none p-1 w-36 bg-sky-500 font-semibold text-white hidden">
            Replay
          </button>
        </div>
        <label className="flex-1 text-center font-semibold capitalize">
          {name}: <span className="text-green-800">${credit}</span>
        </label>
      </div>
      {open && <Alert message={message} handleClose={handleClose} sum={sum} />}
    </div>
  );
};

export default Game;
