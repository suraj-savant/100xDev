import React, { useContext, createContext, useState } from "react";


const CounterContext = createContext("counter");

export default function UseContextApp() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <CounterContext.Provider value={counter}>
                <CounterComponent />
                <IncrementComponent setCounter={setCounter} />
            </CounterContext.Provider>
        </>
    )
}

function IncrementComponent({ setCounter }) {
    const count = useContext(CounterContext)
    return (
        <>
            <button onClick={() => setCounter(count + 1)}>Increment</button>
        </>
    )
}

function CounterComponent() {
    const counter = useContext(CounterContext)
    return (
        <>
            <p>{counter}</p>
        </>
    )
}