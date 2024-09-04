import React, { useEffect, useState } from "react";

export default function PropComponent() {


    return (
        <>
            <Clock />
        </>
    )
}

function Clock() {
    const [time, setTime] = useState(new Date())
    const [color, setColor] = useState("black")

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 3000);
    }, [])

    return (
        <>
            <div>
                <h1 style={{
                    backgroundColor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "250px",
                    height: "100px",
                    color:"white"
                }}>{time.toLocaleTimeString()}</h1>

            </div>
            <select value={color} onChange={(e) => setColor(e.target.value)} >
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select>
        </>
    )
}
