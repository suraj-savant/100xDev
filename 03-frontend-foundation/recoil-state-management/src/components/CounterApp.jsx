import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

export default function CounterApp() {

    return (
        <>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </>
    )
}

function Count() {

    return (
        <>
            <CountRenderer />
            <Button />
            <Comment />
        </>
    )
}

function Comment() {
    const isEven = useRecoilValue(evenSelector);

    return (<>
        <p>{(isEven) ? " Number is even" : null}</p>
    </>)

}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    console.log("Rendering text");
    return (
        <p>Counter {count}</p>
    )
}

function Button() {
    const setCount = useSetRecoilState(countAtom);
    console.log("Rendering btn");

    function incrementCount() {
        setCount((count) => {
            return count + 1;
        })
    }
    return (
        <>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
        </>
    )
}