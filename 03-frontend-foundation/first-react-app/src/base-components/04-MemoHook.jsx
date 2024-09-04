import React, {memo, useCallback, useState} from "react";


export default function MemoHookComponent(){
  const [count, setCount] = useState(0);
 
    return (<>
    <button onClick={()=>setCount(count + 1)}> Click Count {count}</button>
    <ChildComponent />
    <MemoChildComponet msg="Memo child without useCallback" inputFunction={()=>{}}/>        
    <MemoChildComponet msg="Memo child with useCallback" inputFunction={useCallback(()=>{}, [])} />
    </>)
}

function ChildComponent(){
  console.log("Rendering the Child")
    return(
        <>
        <p>This is the Child component</p>
        </>
    )
}

const MemoChildComponet = memo(({msg, inputFunction}) =>{
    console.log(msg)
    return (
        <>
        <p>{msg}</p>
        </>
    )
})