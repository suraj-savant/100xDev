import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

export default function ReactHookComponent() {
    const [counter, setCounter] = useState(0);
    const [factIp, setFactIp] = useState(0);

    const increment = useCallback(() => {
        console.log("Counter useCallback ")
        setCounter(counter + 1)
    }, [counter])


    return (
        <>
            <CountComponent counter={counter} onClick={increment} />
            <FactotialComponent factIp={factIp} setFactIp={useCallback(setFactIp, [factIp ])}/>
        </>

    )
}

const  FactotialComponent = memo(({ factIp, setFactIp }) => {
    const fact = useMemo(() => {
        console.log("Calculating fact")
        let fact = 1;
        for (let i = factIp; i > 1; i--) fact *= i
        return fact
    }, [factIp])
    console.log("Rendering fact component")
    return (
        <>
            <p>Factotial Calculator</p>
            <input type="number" onChange={(e) =>
                {
                    e.preventDefault()
                    setFactIp(e.target.value)
                }} />
            <p>{factIp}!={fact}</p>
        </>
    )
})

const CountComponent = memo(({ counter, onClick }) => {
    console.log("Rendering counter")
    return (
        <>
            <button onClick={onClick}>Click count {counter}</button>
        </>
    )
}
)


