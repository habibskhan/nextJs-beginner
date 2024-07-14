"use client";

import { useState } from "react";

const Button = (props) => {
    // const [showData, setShowData] = useState(false);
    const [showData, setShowData] = useState();
    return (
        <>
            <button onClick={() => alert(props.description)}>Check alert description</button>

            {showData && <p>{props.description}</p>}
            {/* <button onClick={() => setShowData(true)}>Check prited description</button> */}

            {/* Toggle description */}
            <button onClick={() => setShowData(!showData)}>Check prited description</button>
        </>
    )
}

export default Button;