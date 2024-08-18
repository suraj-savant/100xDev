import React, { useState } from "react";

export default function FirstComponent() {
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }
    return (
        <>
            <CounterComponent counter={counter} onClick={increment} />

        </>
    )
}

function CounterComponent({ counter, onClick }) {

    return (
        <>
            <button onClick={onClick}>Click Count {counter}</button>
        </>
    )
}