import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const AddUser = ({ open, onClose }) => {
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        avatar: '',
        city: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleAvatarSelect = () => {
    };

    const handleSubmit = () => {
        console.log(userData);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Thêm người dùng</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="fullName"
                    name="fullName"
                    label="Họ tên"
                    type="text"
                    fullWidth
                    value={userData.fullName}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={userData.email}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="Số điện thoại"
                    type="text"
                    fullWidth
                    value={userData.phone}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="address"
                    name="address"
                    label="Địa chỉ"
                    type="text"
                    fullWidth
                    value={userData.address}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="city"
                    name="city"
                    label="Thành phố"
                    type="text"
                    fullWidth
                    value={userData.city}
                    onChange={handleInputChange}
                />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                    <Button variant="contained" onClick={handleAvatarSelect} style={{ marginRight: '1rem' }}>Chọn ảnh</Button>
                    <span>Avatar</span>
                    {userData.avatar && <img src={userData.avatar} alt="Avatar preview" style={{ width: '50px', height: '50px', marginLeft: '1rem' }} />}
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" sx={{ fontWeight: '600' }}>
                    Hủy
                </Button>
                <Button onClick={handleSubmit} sx={{ color: 'green', fontWeight: '600' }} autoFocus>
                    Thêm người dùng
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddUser
