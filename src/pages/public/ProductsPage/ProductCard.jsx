import React from "react";
import { LocalGroceryStore } from "@mui/icons-material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from "react-router-dom";
import { convertPrice } from '../../../util'

const ProductCard = (props) => {
  const { countInStock, description, imageProduct, nameProduct, price, rating, type, selled, discount, id } = props
  const navigate = useNavigate()

  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="relative w-auto transition-all cursor-pointer group">
        <div className=" flex justify-center items-center h-80">
          <img
            className="h-full w-full object-cover object-center transition-transform duration-300"
            src={imageProduct}
            alt={nameProduct}
          />
        </div>

        <div className="absolute inset-0 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-12 h-12 bg-black flex justify-center items-center rounded-full">
            <LocalGroceryStore className="text-white" />
          </button>
          <button className="w-12 h-12 bg-black flex justify-center items-center rounded-full" onClick={() => handleDetailsProduct(id)}>
            <RemoveRedEyeIcon className="text-white" />
          </button>
        </div>

        <div className="pt-3 px-5 textPart bg-white-p-3 font-sans">
          <div>
            <p className="">{nameProduct}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold text-2xl text-logo-green">{convertPrice(price)}</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default ProductCard;
