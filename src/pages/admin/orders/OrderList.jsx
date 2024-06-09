import { DeleteForever, Settings, Visibility } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { WrapperHeader, WrapperItem, WrapperNameProduct, WrapperProduct } from './style';
import TableComponent from '../../../components/admin/TableComponent/TableComponent';
import { useSelector } from 'react-redux';
import * as OrderAllService from "../../../services/OrderAllService";
import { useQuery } from '@tanstack/react-query';
import InputComponent from '../../../components/admin/InputComponent/InputComponent';
import { Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { convertPrice } from '../../../util';
import { orderContant } from '../../../contant';
import ModalComponent from '../../../components/admin/ModalComponent/ModelComponent';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const OrderList = () => {
    const user = useSelector((state) => state?.user);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [orderDetail, setOrderDetail] = useState(null);

    const handleEditOrder = () => {
        setIsOpenDrawer(true);
    };

    const handleCancelDelete = () => {
        setIsModalOpenDelete(false);
    };

    const handleCloseDetail = () => {
        setIsModalOpenDetail(false);
        setOrderDetail(null);
    };

    const handleDeleteProduct = () => {
        // Handle delete product logic here
    };

    const handleExportPDF = async () => {
        const dialogContent = document.getElementById('dialog-content');
        const fileName = `Hoá đơn_${orderDetail?.data?._id}.pdf`;

        await new Promise((resolve) => setTimeout(resolve, 1000));

        html2canvas(dialogContent).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(fileName);
        });
    };

    const handleShowDetail = async (orderId) => {
        setSelectedOrderId(orderId);
        setIsModalOpenDetail(true);
        const orderDetailData = await OrderAllService.getDetailsInfoOrder(orderId, user?.access_token);
        console.log("Order Detail Data: ", orderDetailData);
        setOrderDetail(orderDetailData);
    };

    const renderAction = (orderId) => {
        return (
            <div>
                <Visibility
                    style={{ color: '#98FB98', fontSize: '30px', cursor: 'pointer' }}
                    onClick={() => handleShowDetail(orderId)}
                />
                <Settings
                    style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }}
                    onClick={handleEditOrder}
                />
                <DeleteForever
                    style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }}
                    onClick={() => setIsModalOpenDelete(true)}
                />
            </div>
        );
    };

    const getAllOrder = async () => {
        const res = await OrderAllService.getAllInfoOrder(user?.access_token);
        return res;
    };

    const queryOrder = useQuery({ queryKey: ['orders'], queryFn: getAllOrder });
    const { isLoading: isLoadingOrders, data: orders } = queryOrder;

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <InputComponent
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                // setTimeout(() => searchInput.current?.select(), 100);
            }
        },
    });

    const columns = [
        {
            title: 'Họ tên',
            dataIndex: 'fullName',
            sorter: (a, b) => a.fullName.length - b.fullName.length,
            ...getColumnSearchProps('fullName'),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            sorter: (a, b) => a.phone.length - b.phone.length,
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            sorter: (a, b) => a.address.length - b.address.length,
            ...getColumnSearchProps('address'),
        },
        // {
        //     title: 'Đã trả tiền',
        //     dataIndex: 'isPaid',
        //     sorter: (a, b) => a.isPaid.length - b.isPaid.length,
        //     ...getColumnSearchProps('isPaid'),
        // },
        {
            title: 'Chuyển phát',
            dataIndex: 'isDelivered',
            sorter: (a, b) => a.isDelivered.length - b.isDelivered.length,
            ...getColumnSearchProps('isDelivered'),
        },
        {
            title: 'Phương thức thanh toán',
            dataIndex: 'paymentMethod',
            sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
            ...getColumnSearchProps('paymentMethod'),
        },
        {
            title: 'Tổng số tiền',
            dataIndex: 'totalPrice',
            sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
            ...getColumnSearchProps('totalPrice'),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => renderAction(record.key),
        },
    ];

    const dataTable = orders?.data?.length && orders?.data?.map((order) => {
        return {
            ...order,
            key: order._id,
            fullName: order?.shippingAddress?.fullName || '',
            phone: order?.shippingAddress?.phone || '',
            address: order?.shippingAddress?.address || '',
            paymentMethod: orderContant.payment[order?.paymentMethod],
            // isPaid: order?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán',
            isDelivered: order?.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng',
            totalPrice: convertPrice(order?.totalPrice),
            action: renderAction(order._id),
        };
    });

    return (
        <div>
            <WrapperHeader>Quản lý đơn hàng</WrapperHeader>
            <div style={{ marginTop: '20px' }}>
                <TableComponent columns={columns} isLoading={isLoadingOrders} data={dataTable} />
            </div>
            <Dialog
                open={isModalOpenDetail}
                onClose={handleCloseDetail}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                id="dialog-content"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Thông tin đơn hàng"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {orderDetail ? (
                            <div>
                                <p>Họ tên: {orderDetail?.data?.shippingAddress?.fullName || 'N/A'}</p>
                                <p>Số điện thoại: {orderDetail?.data?.shippingAddress?.phone || 'N/A'}</p>
                                <p>Địa chỉ: {orderDetail?.data?.shippingAddress?.address || 'N/A'}</p>
                                <p>Phương thức thanh toán: {orderContant.payment[orderDetail?.data?.paymentMethod]}</p>

                                {/* <p>Trạng thái thanh toán: {orderDetail?.data?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}</p> */}
                                <p>Trạng thái giao hàng: {orderDetail?.data?.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng'}</p>
                                <hr style={{ margin: '5px' }} />
                                <div>
                                    {orderDetail?.data?.orderItems?.map((item) => {
                                        const priceMemo = item?.price * item?.amount;
                                        return (
                                            <WrapperProduct>
                                                <WrapperNameProduct>
                                                    <img src={item?.imageProduct}
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
                                                    }}>{item?.nameProduct}</div>
                                                </WrapperNameProduct>
                                                <WrapperItem>Đơn giá: {convertPrice(item?.price)}</WrapperItem>
                                                <WrapperItem>Số lượng: {item?.amount}</WrapperItem>
                                                <WrapperItem>Giảm giá: {item?.discount ? convertPrice(priceMemo * item?.discount / 100) : '0 VND'}</WrapperItem>
                                            </WrapperProduct>
                                        );
                                    })}
                                </div>
                                <hr style={{ margin: '5px' }} />
                                <Typography variant="body1" align="right" style={{ fontWeight: 'bold', color: 'red' }}>Phí giao hàng: {convertPrice(orderDetail?.data?.shippingPrice)}</Typography>
                                <hr style={{ margin: '5px' }} />
                                <Typography variant="body1" align="center" style={{ fontWeight: 'bold', color: 'red' }}>Tổng số tiền: {convertPrice(orderDetail?.data?.totalPrice)}</Typography>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </DialogContentText>
                </DialogContent>
                <Button
                    onClick={handleExportPDF}
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        padding: '10px',
                        backgroundColor: '#4B494E',
                        borderRadius: '6px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                        marginBottom: '20px',
                        color: '#B9D431',
                        transition: 'box-shadow 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5)',
                        }
                    }}
                >
                    In hoá đơn
                </Button>
            </Dialog>
            <ModalComponent title="Xóa đơn hàng" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
                <div>Bạn có chắc xóa đơn hàng này không?</div>
            </ModalComponent>
        </div>
    );
};

export default OrderList;
