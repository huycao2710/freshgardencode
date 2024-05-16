import { Delete, Edit, PersonAdd } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import AddUser from './AddUser';
import EditUser from './EditUser';

const UserList = () => {
    const [open, setOpen] = useState(false);
    const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
    const [openEditUserDialog, setOpenEditUserDialog] = useState(false);

    const handleOpenAddUserClick = () => {
        setOpenAddUserDialog(true);
    };

    const handleCloseAddUserDialog = () => {
        setOpenAddUserDialog(false);
    };

    const handleOpenEditUserClick = () => {
        setOpenEditUserDialog(true);
    };

    const handleCloseEditUserDialog = () => {
        setOpenEditUserDialog(false);
    };

    const handleDeleteClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-xl font-semibold mb-4">Quản lý người dùng</h1>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-full">
                <div className="flex justify-end px-6 py-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center" onClick={handleOpenAddUserClick}>
                        <PersonAdd style={{ marginRight: 8 }} />
                        Thêm người dùng
                    </button>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="border-collapse bg-white text-left text-sm text-gray-500 w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Tên</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Trạng thái</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Phân Quyền</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
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
                                <td class="px-6 py-4">Product Designer</td>
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
                                            Product
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
                                        <button onClick={handleOpenEditUserClick}>
                                            <Edit style={{ fontSize: 20 }} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <AddUser open={openAddUserDialog} onClose={handleCloseAddUserDialog} />
            <EditUser open={openEditUserDialog} onClose={handleCloseEditUserDialog} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Xác nhận xóa</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn có chắc chắn muốn xóa người dùng này không?
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

export default UserList