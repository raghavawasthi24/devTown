import React from "react";
import ItemCard from "./components/ItemCard";
import Filters from "./components/Filters";
import { useDispatch, useSelector } from "react-redux";
import Button from "../styledComponents/Button";
import { toggleValue } from "../store/slices/filterSlice";

const Home = () => {

  //getting the filtered products
  const filteredProducts = useSelector(
    (state) => state.applyFilter.filteredProductList
  );

 const dispatch = useDispatch();
 const value = useSelector((state) => state.applyFilter.open);
 console.log(value);

  
  return (
    <div className="home">
      <div className="text-2xl font-bold text-white bg-gray-500 py-10 px-6 ">
        Products
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className={`${value?"w-1/2 block md:hidden":"hidden"}`}>
          <Filters />
        </div>
        <div className="w-1/4 hidden md:block">
          <Filters />
        </div>
        <div className="md:hidden flex justify-end m-6">
          <Button onClick={()=>dispatch(toggleValue())}>
            Apply Filter
          </Button>
        </div>
        <div className="w-full md:w-3/4 flex justify-center flex-wrap flex-1">
          {filteredProducts.length!=0?
          filteredProducts.map((product, key) => {
            // console.log(product);
            return (
              <ItemCard
                key={key}
                img={product.images[0]}
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
              />
            
            );
          })
        :
        <p>No Item Found!</p>
        }
        </div>
      </div>
    </div>
  );
};

export default Home;
