import React from "react";
import Card from "../../styledComponents/Card";
import Badge from "../../styledComponents/Badge";

const ItemCard = ({ img, title, price, description,category }) => {
  // console.log(title,price,description)
  return (
    <Card>
      <img src={img} alt="product" className="w-full h-3/5 object-contain" />
      <div className="flex justify-end">
        <Badge>{category}</Badge>
      </div>
      <div className="flex justify-between">
        <p>{title}</p>
        <p> Rs.{price}</p>
      </div>
      <p className="text-gray-500">{description}</p>
    </Card>
  );
};

export default ItemCard;
