import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import * as OrderAllService from "../../../services/OrderAllService";
import { useSelector } from "react-redux";
import { WrapperContainer, WrapperFooterItem, WrapperHeaderItem, WrapperItemOrder, WrapperListOrder, WrapperStatus } from "./style";
import { convertPrice } from "../../../util";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutationHooks } from "../../../hooks/useMutationHook";
import * as message from '../../../components/global/MessageComponent/Message';
import Loading from "../../../components/global/LoadingComponent/LoadingComponent";
import ButtonComp from "../../../components/global/ButtonComponent/ButtonComp";
import { orderContant } from '../../../contant';

const MyOrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const fetchMyOrder = async () => {
    const res = await OrderAllService.getOrderByUserId(
      state?.id,
      state?.token
    );
    return res.data;
  };

  const queryOrder = useQuery({
    queryKey: ["orders"],
    queryFn: fetchMyOrder,
    enabled: !!state?.id && !!state?.token,
  });

  const { isPending, isError, data } = queryOrder;

  const handleDetailsOrder = (id) => {
    navigate(`/details-order/${id}`, {
      state: {
        token: state?.token
      }
    });
    window.scrollTo(0, 0);
  };

  const mutation = useMutationHooks(
    (data) => OrderAllService.cancelOrderDetailsInfo(data.id),
    {
      onSuccess: () => {
        queryOrder.refetch();
        message.success('Huỷ đơn hàng thành công!');
      },
      onError: (error) => {
        console.error('Error cancelling order:', error);
        message.error('Huỷ đơn hàng thất bại!');
      }
    }
  );

  const handleCancelOrder = (order) => {
    mutation.mutate({ id: order._id });
  };

  const { isPending: isPendingCancel, isSuccess: isSuccessCancel, isError: isErrorCancel, data: dataCancel } = mutation;

  useEffect(() => {
    if (mutation.isSuccess) {
      const { data: response } = mutation;
      if (response?.status === 'OK') {
        message.success('Huỷ đơn hàng thành công!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        message.error(response?.message || 'Huỷ đơn hàng thất bại!');
      }
    }
  }, [mutation.isSuccess, mutation.isError]);

  const renderProduct = (data) => {
    return data?.map((order) => (
      <WrapperHeaderItem key={order?._id}>
        <img
          src={order?.imageProduct}
          style={{
            width: '70px',
            height: '70px',
            objectFit: 'cover',
            border: '1px solid rgb(238, 238, 238)',
            padding: '2px'
          }}
          alt={order?.nameProduct}
        />
        <div style={{
          width: 260,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          marginLeft: '10px'
        }}>{order?.nameProduct}</div>
        <span style={{ fontSize: '13px', color: '#242424', marginLeft: 'auto' }}>{convertPrice(order?.price)}</span>
      </WrapperHeaderItem>
    ));
  };

  return (
    <Loading isPending={isPending || isPendingCancel}>
      <WrapperContainer>
        <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
          <h4>Đơn hàng của tôi</h4>
          <WrapperListOrder>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((order) => (
                <WrapperItemOrder key={order?._id}>
                  <WrapperStatus>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Trạng thái</span>
                    <div>
                      <span style={{ color: 'rgb(255, 66, 78)' }}>Giao hàng: </span>
                      <span style={{ color: 'rgb(90, 32, 193)', fontWeight: 'bold' }}>{order.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng'}</span>
                    </div>
                    <div>
                      <span style={{ color: 'rgb(255, 66, 78)' }}>Phương thức thanh toán: </span>
                      <span style={{ color: 'rgb(90, 32, 193)', fontWeight: 'bold' }}>{orderContant.payment[order?.paymentMethod]}</span>
                    </div>
                  </WrapperStatus>
                  {renderProduct(order?.orderItems)}
                  <WrapperFooterItem>
                    <div>
                      <span style={{ color: 'rgb(255, 66, 78)' }}>Tổng tiền: </span>
                      <span
                        style={{ fontSize: '13px', color: 'rgb(56, 56, 61)', fontWeight: 700 }}
                      >{convertPrice(order?.totalPrice)}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <ButtonComp
                        onClick={() => handleCancelOrder(order)}
                        size={40}
                        styleButton={{
                          height: '36px',
                          border: '1px solid #9255FD',
                          borderRadius: '4px'
                        }}
                        textbutton={'Hủy đơn hàng'}
                        styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                      />
                      <ButtonComp
                        onClick={() => handleDetailsOrder(order?._id)}
                        size={40}
                        styleButton={{
                          height: '36px',
                          border: '1px solid #9255FD',
                          borderRadius: '4px'
                        }}
                        textbutton={'Xem chi tiết'}
                        styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                      />
                    </div>
                  </WrapperFooterItem>
                </WrapperItemOrder>
              ))
            ) : (
              <p>No orders available</p>
            )}
          </WrapperListOrder>
        </div>
      </WrapperContainer>
    </Loading>
  );
};

export default MyOrderPage;