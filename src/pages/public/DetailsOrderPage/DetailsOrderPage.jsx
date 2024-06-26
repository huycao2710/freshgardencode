import React from 'react';
import { WrapperAllPrice, WrapperContentInfo, WrapperHeaderUser, WrapperInfoUser, WrapperItem, WrapperItemLabel, WrapperLabel, WrapperNameProduct, WrapperProduct, WrapperStyleContent } from './style';
import { useLocation, useParams } from 'react-router-dom';
import * as OrderAllService from '../../../services/OrderAllService';
import { useQuery } from '@tanstack/react-query';
import { orderContant } from '../../../contant';
import { convertPrice } from '../../../util';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../../components/global/LoadingComponent/LoadingComponent';

const DetailsOrderPage = () => {
  const params = useParams();
  const location = useLocation();
  const { state } = location;
  const { id } = params;

  const fetchDetailsOrder = async () => {
    const res = await OrderAllService.getDetailsInfoOrder(id, state?.token);
    return res.data;
  };

  const user = useSelector((state) => state.user);
  const queryOrder = useQuery({
    queryKey: ["orders-details"],
    queryFn: fetchDetailsOrder,
    enabled: !!user?.id && !!user?.access_token,
  });

  const { isPending, data } = queryOrder;

  const priceMemo = useMemo(() => {
    return data?.orderItems?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
  }, [data]);

  const totalDiscount = useMemo(() => {
    return data?.orderItems?.reduce((total, cur) => {
      return total + (cur.discount ? (cur.price * cur.amount * cur.discount) / 100 : 0);
    }, 0);
  }, [data]);

  const totalPriceAfterDiscount = useMemo(() => {
    return priceMemo - totalDiscount;
  }, [priceMemo, totalDiscount]);

  return (
    <Loading isPending={isPending}>
      <div style={{ width: '100%', height: '100vh', background: '#f5f5fa' }}>
        <div style={{ width: '1270px', margin: '0 auto', height: '1270px' }}>
          <h4>Chi tiết đơn hàng</h4>
          <WrapperHeaderUser>
            <WrapperInfoUser>
              <WrapperLabel>Địa chỉ người nhận</WrapperLabel>
              <WrapperContentInfo>
                <div className='name-info'>{data?.shippingAddress?.fullName}</div>
                <div className='address-info'><span>Địa chỉ: </span> {`${data?.shippingAddress?.address}, ${data?.shippingAddress?.city}`}</div>
                <div className='phone-info'><span>Điện thoại: </span> {data?.shippingAddress?.phone}</div>
              </WrapperContentInfo>
            </WrapperInfoUser>
            <WrapperInfoUser>
              <WrapperLabel>Hình thức giao hàng</WrapperLabel>
              <WrapperContentInfo>
                <div className='delivery-info'><span className='name-delivery'>{orderContant.delivery[state?.delivery]} </span>Giao hàng tiết kiệm</div>
                <div className='delivery-fee'><span>Phí giao hàng: </span> {data?.shippingPrice} VND</div>
                <div className='status-payment'>{data?.isDelivered ? 'Đã vận chuyển' : 'Chưa vận chuyển'}</div>
              </WrapperContentInfo>
            </WrapperInfoUser>
            <WrapperInfoUser>
              <WrapperLabel>Hình thức thanh toán</WrapperLabel>
              <WrapperContentInfo>
                <div className='payment-info'>{orderContant.payment[data?.paymentMethod]}</div>
              </WrapperContentInfo>
            </WrapperInfoUser>
          </WrapperHeaderUser>
          <WrapperStyleContent>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '670px' }}>Sản phẩm</div>
              <WrapperItemLabel>Giá</WrapperItemLabel>
              <WrapperItemLabel>Số lượng</WrapperItemLabel>
              <WrapperItemLabel>Giảm giá</WrapperItemLabel>
            </div>
            {data?.orderItems?.map((order) => {
              return (
                <WrapperProduct>
                  <WrapperNameProduct>
                    <img src={order?.imageProduct}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        border: '1px solid rgb(238, 238, 238)',
                        padding: '2px'
                      }}
                    />
                    <div style={{
                      width: 260,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      marginLeft: '10px',
                      height: '70px',
                    }}>{order?.nameProduct}</div>
                  </WrapperNameProduct>
                  <WrapperItem>{convertPrice(order?.price)}</WrapperItem>
                  <WrapperItem>{order?.amount}</WrapperItem>
                  <WrapperItem>{order?.discount ? convertPrice(priceMemo * order?.discount / 100) : '0 VND'}</WrapperItem>
                </WrapperProduct>
              )
            })}

            <WrapperAllPrice>
              <WrapperItemLabel>Tạm tính</WrapperItemLabel>
              <WrapperItem>{convertPrice(priceMemo)}</WrapperItem>
            </WrapperAllPrice>
            <WrapperAllPrice>
              <WrapperItemLabel>Phí vận chuyển</WrapperItemLabel>
              <WrapperItem>{convertPrice(data?.shippingPrice)}</WrapperItem>
            </WrapperAllPrice>
            <WrapperAllPrice>
              <WrapperItemLabel>Giảm giá</WrapperItemLabel>
              <WrapperItem>{convertPrice(totalDiscount)}</WrapperItem>
            </WrapperAllPrice>
            <WrapperAllPrice>
              <WrapperItemLabel>Tổng cộng</WrapperItemLabel>
              <WrapperItem>{convertPrice(totalPriceAfterDiscount + data?.shippingPrice)}</WrapperItem>
            </WrapperAllPrice>
          </WrapperStyleContent>
        </div>
      </div>
    </Loading>
  )
}

export default DetailsOrderPage;
