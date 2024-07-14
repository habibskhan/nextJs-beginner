import Button from "./button/page";

async function ProductList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    return data.products; // products is api array name
}
const ServerFecthApi = async () => {
    let products = await ProductList();
    return (
        <>
            <h1>Server Product List</h1>
            {
                products.map((item, i) => (
                    <div key={i}>
                        <h4>Name: {item.title}</h4>
                        <p>Category: {item.category}</p>
                        {/* <p>Decription: {item.description}</p> */}
                        <Button description={item.description} />
                    </div>
                ))
            }
        </>
    )
}

export default ServerFecthApi;