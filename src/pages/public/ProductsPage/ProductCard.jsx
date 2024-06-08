import React, { useEffect, useState } from "react";
import { LocalGroceryStore } from "@mui/icons-material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { convertPrice } from '../../../util'
import { toast } from "react-toastify";
import {
  addOrderProduct,
  resetOrder,
} from "../../../redux/slides/orderAllSlide";
import * as ProductAllService from "../../../services/ProductAllService";
import { useQuery } from "@tanstack/react-query";

const ProductCard = (props) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { countInStock, description, imageProduct, nameProduct, price, rating, type, selled, discount, idProduct } = props;

  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
    window.scrollTo(0, 0);
  }

  const fetchGetDetailsProduct = async () => {
    const res = await ProductAllService.getDetailsInfoProduct(props.idProduct);
    return res.data;
  };

  const { isPending, data: productDetails } = useQuery({
    queryKey: ["product-details", props.idProduct],
    queryFn: fetchGetDetailsProduct,
    enabled: !!props.idProduct,
  });

  useEffect(() => {
    if (productDetails) {
      const orderRedux = order?.orderItems?.find(
        (item) => item.product === productDetails._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInStock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        setErrorLimitOrder(false);
      } else if (productDetails?.countInStock === 0) {
        setErrorLimitOrder(true);
      }
    }
  }, [numProduct, productDetails, order]);

  useEffect(() => {
    if (order.isSuccessOrder) {
      toast.success("Sản phẩm đã thêm vào giỏ hàng");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSuccessOrder, dispatch]);

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
    } else {
      const orderRedux = order.orderItems?.find(
        (item) => item.product === productDetails?._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInStock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              nameProduct: productDetails?.nameProduct,
              amount: numProduct,
              imageProduct: productDetails?.imageProduct,
              price: productDetails?.price,
              product: productDetails?._id,
              discount: productDetails?.discount,
              countInStock: productDetails?.countInStock,
            },
          })
        );
      } else {
        setErrorLimitOrder(true);
      }
    }
  };

  if (!productDetails) {
    return null;
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
          <button className="w-12 h-12 bg-black flex justify-center items-center rounded-full" onClick={handleAddOrderProduct}>
            <LocalGroceryStore className="text-white" />
          </button>
          <button className="w-12 h-12 bg-black flex justify-center items-center rounded-full" onClick={() => handleDetailsProduct(idProduct)}>
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
