"use client";
import { useEffect, useState } from "react";

const ClientFecthApi = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const Taketime = async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            console.log(data);
            setProduct(data.products); // products is api array name
        };
        Taketime();
    }, []);
    return (
        <>
            <h1>Client Product List</h1>
            {
                product.map((item, i) => (
                    <div key={i}>
                        <h4>Name: {item.title}</h4>
                        <p>Decription: {item.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export default ClientFecthApi;