import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const EditProduct = ({ open, onClose }) => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        countInStock: '',
        rating: '',
        type: '',
        newType: '',
        discount: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageSelect = () => {
    };

    const handleSubmit = () => {
        console.log(productData);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Cập nhật thông tin sản phẩm</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Tên sản phẩm"
                    type="text"
                    fullWidth
                    value={productData.name}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="description"
                    name="description"
                    label="Mô tả"
                    type="text"
                    fullWidth
                    value={productData.description}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="price"
                    name="price"
                    label="Giá tiền"
                    type="number"
                    fullWidth
                    value={productData.price}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="countInStock"
                    name="countInStock"
                    label="Số lượng"
                    type="number"
                    fullWidth
                    value={productData.countInStock}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="rating"
                    name="rating"
                    label="Rating"
                    type="number"
                    fullWidth
                    value={productData.rating}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="discount"
                    name="discount"
                    label="Giảm giá (%)"
                    type="number"
                    fullWidth
                    value={productData.discount}
                    onChange={handleInputChange}
                />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                    <Button variant="contained" onClick={handleImageSelect} style={{ marginRight: '1rem' }}>Chọn ảnh sản phẩm</Button>
                    <span>Ảnh sản phẩm</span>
                    {productData.image && <img src={productData.image} alt="Product preview" style={{ width: '50px', height: '50px', marginLeft: '1rem' }} />}
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" sx={{ fontWeight: '600' }}>
                    Hủy
                </Button>
                <Button onClick={handleSubmit} sx={{ color: 'orange', fontWeight: '600' }}>
                    Cập nhật sản phẩm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditProduct;
