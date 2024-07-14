"use client";

import { useEffect, useState } from "react";

const Loader = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const userdata = async () => {
            let data = await fetch('http://dummyjson.com/users');
            data = await data.json();
            console.log(data);
            setUser(data.users); // products is api array name
        }
        userdata();
    }, []);

    return (
        <>
            <h1>Welcome to Loader Page</h1>

            {
                user.map((item, i) => (
                    <div key={i}>
                        <h4>Name: {item.firstName}</h4>
                        <p>Age: {item.age}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Loader;