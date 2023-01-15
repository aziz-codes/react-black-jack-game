import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "./Alert";
const Game = () => {
  const { name } = useParams();


      // const [num, setNum] = useState(0);
      var num = 0;
      var sum = 0;
      const [message, setMessage] = useState('');
      const [cards, setCards] = useState([]);
      const [isAlive, setIsAlive] = useState(true);
      const [open, setOpen] = useState(false);
      const handleClick = () =>{
  num = Math.floor(Math.random()*10)+1;
     setCards([...cards,num])
    }

      cards.map((card)=>{
       return sum+=card;
      })
      
    useEffect(()=>{
       if(sum>20){
         setIsAlive(false);
         setOpen(true);
         setMessage('You are out of the game !')
       }
    },[sum])

  const handleClose =() =>{
  setOpen(false);
  }
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="w-96 h-96 border shadow-md rounded-md flex flex-col px-4 gap-4">
        <div className="text-center p-2 font-bold font-mono text-3xl first-letter:text-sky-500 uppercase">
          Black<span className="text-red-500">J</span>ack
        </div>
             <div className="content flex gap-4 flex-col ml-20 flex-1">
             <div className="flex flex-row gap-4">Cards
             {/* {data.map((card,i)=>(
              <p key={i}>{card}</p>
             ))} */}
 
             </div>
             <h2>Total : {sum}</h2>
            <div className="flex flex-row gap-4 max-w-xs flex-wrap">
              {cards.map((card,i)=>(
                 <div className="h-8 w-8 shadow-md rounded-sm border text-center font-bold animate-pulse" key={i}>{card}</div>
              ))}
            </div>
             <button className="rounded-md border-none p-1 w-36 bg-sky-500 font-semibold text-white" onClick={handleClick}>Draw</button>
             <button className="rounded-md border-none p-1 w-36 bg-sky-500 font-semibold text-white hidden">Replay</button>
             </div>
             <label className="flex-1 text-center font-semibold capitalize">{name}:  <span className="text-green-800">$45</span></label>
             
      </div>
      {open && <Alert message={message} handleClose={handleClose} />}
    </div>
  );
};

export default Game;
