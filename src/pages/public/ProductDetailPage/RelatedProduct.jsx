import React from "react";

const ProductDetailsCard = ({ product }) => {
  return (
    <> {/* Tăng khoảng cách giữa các sản phẩm */}
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem]"> {/* Tăng kích thước của thẻ RelatedProduct */}
        <div className="h-[15rem] w-[15rem]"> {/* Kích thước ảnh lớn hơn */}
          <img
            className="object-cover object-top w-full h-full"
            src={product.imageProduct}
            alt=""
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.nameProduct}</h3>
          <p className="mt-2 text-sm text-gray-500">{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
