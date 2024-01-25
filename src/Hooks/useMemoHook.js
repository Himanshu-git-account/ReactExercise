import { useMemo, useState } from "react";

const useMemoHook = () => {
  const [inputValue, setInputValue] = useState(0)
  const [toggleDark,setToggleDark] = useState(false);

  const findNthPrime = (num) => {
    console.log(num)
    if (num <= 0 || num==="") {
      return 0;
    }
    let count = 0;
    let n = 2;
    while (count < num) {
      if (isPrime(n)) {
        count++;
      }
      if (count < num) {
        n++;
      }
    }
    console.log("inside computational heavy task");
    return n;
  };
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const abc =useMemo(()=>findNthPrime(inputValue),[inputValue]);
  return (
    <div className="m-4 p-4 text-lg">
      <h1 className="text-amber-950 font-bold text-4xl">Use Memo</h1>
      <div className={toggleDark?"w-80 my-4 h-80  bg-gray-200 text-cyan-800":"w-80 my-4 h-80  text-slate-200 bg-slate-800"}>
        <input
          className="border border-slate-700 m-2 text-blue-950"
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        {abc}
        <div>
            <button className="bg-red-700 text-cyan-50 px-4 py-2 m-2" onClick={()=>{setToggleDark(!toggleDark)}}>Toggle</button>
        </div>
      </div>
    </div>
  );
};

export default useMemoHook;
