import { Button, Form, Space, Radio } from "antd";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useMutationHooks } from "../../../hooks/useMutationHook";
import { useQuery } from "@tanstack/react-query";
import { DeleteOutlined, EditOutlined, SearchOutlined } from "@mui/icons-material";
import InputComponent from "../../../components/admin/InputComponent/InputComponent";
import { getBase64 } from "../../../util";
import { WrapperHeader, WrapperUploadFile } from "./style";
import TableComponent from "../../../components/admin/TableComponent/TableComponent";
import ModalComponent from "../../../components/admin/ModalComponent/ModelComponent";
import Loading from "../../../components/global/LoadingComponent/LoadingComponent";
import DrawerComponent from "../../../components/admin/DrawerComponent/DrawerComponent";
import * as UserAllService from "../../../services/UserAllService";
import * as message from "../../../components/global/MessageComponent/Message";
import { PlusOutlined } from "@ant-design/icons";

const UserList = () => {
    const [rowSelected, setRowSelected] = useState("");
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isPendingUpdate, setIsPendingUpdate] = useState(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const searchInput = useRef(null);
    const user = useSelector((state) => state?.user);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [stateUserDetails, setStateUserDetails] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        isAdmin: false,
        avatar: '',
        address: '',
        city: '',
    });

    const [form] = Form.useForm();

    const mutationUpdate = useMutationHooks(
        (data) => {
            const { id, token, ...rests } = data;
            const res = UserAllService.updateInfoUser(id, { ...rests }, token);
            return res;
        },
    );

    const mutationDeleted = useMutationHooks(
        (data) => {
            const { id, token } = data;
            const res = UserAllService.deleteInfoUser(id, token);
            return res;
        },
    );

    const mutationDeletedMany = useMutationHooks(
        (data) => {
            const { token, ...ids } = data;
            const res = UserAllService.deleteManyUser(ids, token);
            return res;
        },
    );

    const handleDeleteManyUsers = (ids) => {
        mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
            onSettled: () => {
                queryUser.refetch();
            }
        });
    };

    const getAllUsers = async () => {
        const res = await UserAllService.getAllInfoUser(user?.access_token);
        return res;
    };

    const fetchGetDetailsUser = async (rowSelected) => {
        const res = await UserAllService.getDetailsInfoUser(rowSelected);
        if (res?.data) {
            setStateUserDetails({
                fullName: res?.data?.fullName,
                email: res?.data?.email,
                password: res?.data?.password,
                phone: res?.data?.phone,
                isAdmin: res?.data?.isAdmin,
                address: res?.data?.address,
                avatar: res.data?.avatar,
                city: res?.data?.city,
            });
        }
        setIsPendingUpdate(false);
    };

    useEffect(() => {
        form.setFieldsValue(stateUserDetails);
    }, [form, stateUserDetails]);

    useEffect(() => {
        if (rowSelected && isOpenDrawer) {
            setIsPendingUpdate(true);
            fetchGetDetailsUser(rowSelected);
        }
    }, [rowSelected, isOpenDrawer]);

    const handleDetailsUser = () => {
        setIsOpenDrawer(true);
    };

    const { data: dataUpdated, isPending: isPendingUpdated, isError: isErrorUpdated, isSuccess: isSuccessUpdated } = mutationUpdate;
    const { data: dataDeleted, isPending: isPendingDeleted, isSuccess: isSuccessDeleted, isError: isErrorDeleted } = mutationDeleted;
    const { data: dataDeletedMany, isPending: isPendingDeletedMany, isSuccess: isSuccessDeletedMany, isError: isErrorDeletedMany } = mutationDeletedMany;

    const queryUser = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    });
    const { isPending: isPendingUsers, data: users } = queryUser;

    const renderAction = () => {
        return (
            <div>
                <DeleteOutlined
                    style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
                    onClick={() => setIsModalOpenDelete(true)}
                />
                <EditOutlined
                    style={{ color: "orange", fontSize: "30px", cursor: "pointer" }}
                    onClick={handleDetailsUser}
                />
            </div>
        );
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
    };

    const handleReset = (clearFilters) => {
        clearFilters();
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <InputComponent
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
    });

    const columns = [
        {
            title: "Họ tên",
            dataIndex: "fullName",
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.fullName.length - b.fullName.length,
            ...getColumnSearchProps('fullName')
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.email.length - b.email.length,
            ...getColumnSearchProps('email')
        },
        {
            title: "Password",
            dataIndex: "password",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            sorter: (a, b) => a.phone - b.phone,
            ...getColumnSearchProps('phone')
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.address.length - b.address.length,
            ...getColumnSearchProps('address')
        },
        {
            title: "Thành phố",
            dataIndex: "city",
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.city.length - b.city.length,
            ...getColumnSearchProps('city')
        },
        {
            title: "Admin",
            dataIndex: "isAdmin",
            filters: [
                {
                    text: 'Admin',
                    value: 'true',
                },
                {
                    text: 'Khách hàng',
                    value: 'false',
                },
            ],
        },
        {
            title: "Action",
            dataIndex: "action",
            render: renderAction,
        },
    ];

    const dataTable =
        users?.data?.length > 0 &&
        users?.data?.map((user) => {
            return { ...user, key: user._id, isAdmin: user.isAdmin ? 'Admin' : 'Khách hàng' };
        });

    useEffect(() => {
        if (isSuccessUpdated && dataUpdated?.status === "OK") {
            message.success('Cập nhật thành công thông tin!');
            handleCloseDrawer();
        } else if (isErrorUpdated) {
            message.error('Đã gặp lỗi trong quá trình cập nhật');
        }
    }, [isSuccessUpdated]);

    useEffect(() => {
        if (isSuccessDeleted && dataDeleted?.status === 'OK') {
            message.success('Xoá thành công người dùng!')
            handleCancelDelete()
        } else if (isErrorDeleted) {
            message.error('Gặp lỗi khi xoá người dùng!')
        }
    }, [isSuccessDeleted])

    useEffect(() => {
        if (isSuccessDeletedMany && dataDeletedMany?.status === 'OK') {
            message.success()
        } else if (isErrorDeletedMany) {
            message.error()
        }
    }, [isSuccessDeletedMany])

    const handleCancelDelete = () => {
        setIsModalOpenDelete(false);
    }
    const handleDeleteUser = () => {
        mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
            onSettled: () => {
                queryUser.refetch()
            }
        })
    }
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateUserDetails({
            name: "",
            email: "",
            phone: "",
            isAdmin: false,
        });
        form.resetFields();
    };

    const handleOnchangeDetails = (e) => {
        setStateUserDetails({
            ...stateUserDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnChangeAvatarDetails = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateUserDetails({
            ...stateUserDetails,
            avatar: file.preview,
        });
    };

    const onUpdateUser = () => {
        mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateUserDetails }, {
            onSettled: () => {
                queryUser.refetch()
            }
        })
    }

    const handleChangeAdminStatus = (e) => {
        setStateUserDetails({
            ...stateUserDetails,
            isAdmin: e.target.value,
        });
    };

    return (
        <div>
            <WrapperHeader>
                Quản lý người dùng
            </WrapperHeader>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Button
                    style={{ height: '40px', borderRadius: '6px', borderStyle: 'dashed', marginRight: '10px' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <PlusOutlined style={{ fontSize: '20px' }} /> Thêm người dùng mới
                </Button>
            </div>
            <div style={{ marginTop: "20px" }}>
                <TableComponent
                    handleDeleteMany={handleDeleteManyUsers}
                    columns={columns}
                    isPending={isPendingUsers}
                    data={dataTable}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => {
                                setRowSelected(record._id);
                            },
                        };
                    }}
                />
            </div>

            <DrawerComponent
                title="Chi tiết người dùng"
                isOpen={isOpenDrawer}
                onClose={() => setIsOpenDrawer(false)}
                width="50%"
            >
                <Loading isPending={isPendingUpdate || isPendingUpdated}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        onFinish={onUpdateUser}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Họ tên"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập họ tên!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateUserDetails['fullName']}
                                onChange={handleOnchangeDetails}
                                name="fullName"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập email!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateUserDetails['email']}
                                onChange={handleOnchangeDetails}
                                name="email"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập số điện thoại!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateUserDetails.phone}
                                onChange={handleOnchangeDetails}
                                name="phone"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Địa chỉ"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập địa chỉ!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateUserDetails.address}
                                onChange={handleOnchangeDetails}
                                name="address"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Thành phố"
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập thành phố!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateUserDetails.address}
                                onChange={handleOnchangeDetails}
                                name="city"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Ảnh đại diện"
                            name="avatar"
                            rules={[
                                {
                                    message: "Vui lòng nhập hình đại diện!",
                                },
                            ]}
                        >
                            <WrapperUploadFile
                                onChange={handleOnChangeAvatarDetails}
                                maxCount={1}
                            >
                                <Button>Select File</Button>
                                {stateUserDetails?.avatar && (
                                    <img
                                        src={stateUserDetails?.avatar}
                                        style={{
                                            height: "60px",
                                            width: "60px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            marginLeft: "10px",
                                        }}
                                        alt="avatar"
                                    />
                                )}
                            </WrapperUploadFile>
                        </Form.Item>

                        <Form.Item
                            label="Quyền"
                            name="isAdmin"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn quyền!",
                                },
                            ]}
                        >
                            <Radio.Group onChange={handleChangeAdminStatus} value={stateUserDetails.isAdmin}>
                                <Radio value={true}>Admin</Radio>
                                <Radio value={false}>Khách hàng</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 20,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Cập nhật thông tin
                            </Button>
                        </Form.Item>
                    </Form>
                </Loading>
            </DrawerComponent>
            <ModalComponent title="Xóa người dùng" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteUser}>
                <Loading isPending={isPendingDeleted}>
                    <div>Bạn có chắc muốn xoá tài khoản này không</div>
                </Loading>
            </ModalComponent>
        </div>
    )
}

export default UserList
