import { Delete, Edit } from '@mui/icons-material';
import React, { useState } from 'react';
import EditOrder from './EditOrder';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const OrderList = () => {
    const [open, setOpen] = useState(false);
    const [openEditOrderDialog, setOpenEditOrderDialog] = useState(false);

    const handleOpenEditOrderClick = () => {
        setOpenEditOrderDialog(true);
    };

    const handleCloseEditOrderDialog = () => {
        setOpenEditOrderDialog(false);
    };

    const handleDeleteClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-xl font-semibold mb-4">Quản lý đơn hàng</h1>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-full">
                <div className="w-full overflow-x-auto">
                    <table className="border-collapse bg-white text-left text-sm text-gray-500 w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Team</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                            <tr class="hover:bg-gray-50">
                                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div class="relative h-10 w-10">
                                        <img
                                            class="h-full w-full rounded-full object-cover object-center"
                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                    </div>
                                    <div class="text-sm">
                                        <div class="font-medium text-gray-700">Steven Jobs</div>
                                        <div class="text-gray-400">jobs@sailboatui.com</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <span
                                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                    >
                                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                        Active
                                    </span>
                                </td>
                                <td class="px-6 py-4">Order Designer</td>
                                <td class="px-6 py-4">
                                    <div class="flex gap-2">
                                        <span
                                            class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                                        >
                                            Design
                                        </span>
                                        <span
                                            class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                                        >
                                            Order
                                        </span>
                                        <span
                                            class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                        >
                                            Develop
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-4">
                                        <button onClick={handleDeleteClick}>
                                            <Delete style={{ fontSize: 20 }} />
                                        </button>
                                        <button onClick={handleOpenEditOrderClick}>
                                            <Edit style={{ fontSize: 20 }} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <EditOrder open={openEditOrderDialog} onClose={handleCloseEditOrderDialog} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Xác nhận xóa</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn có chắc chắn muốn xóa đơn hàng này không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" sx={{ fontWeight: '600' }}>
                        Hủy
                    </Button>
                    <Button onClick={handleClose} sx={{ color: 'red', fontWeight: '600' }} autoFocus>
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default OrderList