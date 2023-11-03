import React from "react";
import { products } from "../constants";
import ItemCard from "./components/ItemCard";
import Filters from "./components/Filters";

const Home = () => {
  return (
    <div className="home">
      <div className="text-2xl font-bold text-white bg-gray-500 py-10 px-6 ">
        Products
      </div>
      <div className="flex">
        <div className="w-1/4">
          <Filters />
        </div>
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => {
            console.log(product);
            return (
              <ItemCard
                img={product.images[0]}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
