import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const EditOrder = ({ open, onClose }) => {
    const [orderData, setOrderData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setOrderData({ ...orderData, [name]: value });
    };

    const handleSubmit = () => {
        console.log(orderData);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Cập nhật thông tin đơn hàng</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="fullName"
                    name="fullName"
                    label="Họ tên"
                    type="text"
                    fullWidth
                    value={orderData.fullName}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={orderData.email}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="Số điện thoại"
                    type="text"
                    fullWidth
                    value={orderData.phone}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="address"
                    name="address"
                    label="Địa chỉ"
                    type="text"
                    fullWidth
                    value={orderData.address}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="city"
                    name="city"
                    label="Thành phố"
                    type="text"
                    fullWidth
                    value={orderData.city}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" sx={{ fontWeight: '600' }}>
                    Hủy
                </Button>
                <Button onClick={handleSubmit} sx={{ color: 'orange', fontWeight: '600' }}>
                    Cập nhật đơn hàng
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditOrder;
