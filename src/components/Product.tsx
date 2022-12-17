import React from "react";
import { Prod } from "../App";


  type ProductType = {
    products: Prod[];
  };

  export default function Product({ products }: ProductType) {
    return (
        <>
          {products.slice(0, 16).map((product) => (
              <div className="prod-card" key={product.id}>
                <p>
                  Name: <span>{product.title}</span>
                </p>
                <p>
                  Price: <span>${product.price}</span>
                </p>
                <img src={product.images[0]} alt={product.title} />
              </div>
          ))}
        </>
    );
  }
