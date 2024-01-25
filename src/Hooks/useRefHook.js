import { useRef, useState } from "react";

const useRefHook = () => {
  const [B, setB] = useState(0);
  let a = 0;
  const C = useRef(0);
  console.log("B=", B);
  return (
    <div className="m-4 p-4 text-lg">
      <h1 className="text-amber-950 font-bold text-4xl">Use Ref Hook</h1>
      Let A = {a}
      <button
        className="bg-red-700 text-cyan-50 px-4 py-2 m-2"
        onClick={() => {
          a = a + 1;
          console.log("A=", a);
        }}
      >
        Increase A
      </button>
      <div>
        Let B = {B}
        <button
          className="bg-red-700 text-cyan-50 px-4 py-2 m-2"
          onClick={() => {
            setB(B + 1);
          }}
        >
          Increase B
        </button>
      </div>
      <div>
        UseRef C = {C.current}
        <button
          className="bg-red-700 text-cyan-50 px-4 py-2 m-2"
          onClick={() => {
            C.current = C.current+1
            console.log(C)
          }}
        >
          Increase C
        </button>
      </div>
    </div>
  );
};

export default useRefHook;
