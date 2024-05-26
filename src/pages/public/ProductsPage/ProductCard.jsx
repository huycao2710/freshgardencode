import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="img h-[20rem]">
        <img
          className="h-full w-full object-cover object-center"
          src={`/assets/images/SP/${product.imageUrl}`}
          alt=""
        />
      </div>
      <div className="textPart bg-white-p-3">
        <div>
          
          <p>{product.nameProduct}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice} VND</p>
          <p className="line-through opacity-50">{product.price} VND</p>
          <p className="text-green-600 font-semibold">{product.discountPersent} %</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;