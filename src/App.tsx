import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import "./App.css";

export type Prod = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
};

const url = "https://api.escuelajs.co/api/v1/products";
function App() {

    const [products, setProducts] = useState<Prod[]>([]);

    function getData(url: string) {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }

    useEffect(() => getData(url),
        []);

    return (
        <div className="items">
            <Product products={products} />;
        </div>
    );
}

export default App;

