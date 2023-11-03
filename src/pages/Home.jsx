import React from "react";
import ItemCard from "./components/ItemCard";
import Filters from "./components/Filters";
import { useSelector } from "react-redux";

const Home = () => {

  //getting the filtered products
  const filteredProducts = useSelector(
    (state) => state.applyFilter.filteredProductList
  );

  
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
          {filteredProducts.map((product, key) => {
            // console.log(product);
            return (
              <ItemCard
                key={key}
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
