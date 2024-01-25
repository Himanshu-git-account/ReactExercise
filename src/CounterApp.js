import { useEffect, useRef, useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const intervalId = useRef(0);
  const handleStart = () => {
    if(intervalId.current===0){
      intervalId.current =  setInterval(() => {
        setCounter((prev) => {
          return prev + 1;
        });
      }, 1000);
      
    }
 
  
  };
  const handlePause = () => {
    console.log(intervalId);
    clearInterval(intervalId.current);
    intervalId.current=0
    console.log("pause clicked");
  };

  useEffect(()=>{
    return ()=>{clearInterval( intervalId.current)}
  },[])
  console.log("BOdy", intervalId);
  return (
    <div className="h-96 w-96 m-4 p-4 bg-green-200">
      {counter}
      <div>
        <button
          className="bg-red-700 text-cyan-50 px-4 py-2 m-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-red-700 text-cyan-50 px-4 py-2 m-2"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="bg-red-700 text-cyan-50 px-4 py-2 m-2"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
