import { memo, useCallback, useMemo, useState } from "react"

const UseCallBackHook = () =>{
    const [countA,setCountA] = useState(0);
    const [countB,setCountB] = useState(0);
    const handleIncrementA = () =>{
        console.log("handleIncrementA")
        setCountA(countA+1)
    }
    const handleDecrementA = () =>{
        console.log("handleDecrementA")
        setCountA(countA-1)
    }
    const handleIncrementB = useCallback(() =>{
        console.log("handleIncrementB")
        setCountB(countB+1)
    },[countB])
    const handleDecrementB = useCallback(() =>{
        console.log("handleDecrementB")
        setCountB(countB-1)
    },[countB])
    return(
        <div  className="m-4 p-4 text-lg">
              
      <h1 className="text-amber-950 font-bold text-4xl">Use UseCallBackHook</h1>

            A: {countA} - B: {countB}
            <button className="px-4 py-2 m-2 bg-green-300" onClick={handleIncrementA}>Increment Counter A</button>
            <button className="px-4 py-2 m-2 bg-red-800" onClick={handleDecrementA}>Decrement Counter A</button>
            <ChildComponent handleIncrementB={handleIncrementB} handleDecrementB={handleDecrementB} />
        </div>
    )
}

const ChildComponent =memo(({handleIncrementB,handleDecrementB}) =>{
    console.log("child render")
    return (
        <>
        <button className="px-4 py-2 m-2 bg-green-300" onClick={handleIncrementB}>Increment Counter B</button>
        <button className="px-4 py-2 m-2 bg-red-800" onClick={handleDecrementB}>Decrement Counter B</button>
        </>
    )
}) 
// You can use second argument in memo to compare your prev and next props 

export default UseCallBackHook