import { Button, Form, Radio, Select, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useMutationHooks } from "../../../hooks/useMutationHook";
import { useQuery } from "@tanstack/react-query";
import { DeleteOutlined, EditOutlined, SearchOutlined } from "@mui/icons-material";
import InputComponent from "../../../components/admin/InputComponent/InputComponent";
import { getBase64, renderOptions } from "../../../util";
import { WrapperHeader, WrapperUploadFile } from "./style";
import TableComponent from "../../../components/admin/TableComponent/TableComponent";
import ModalComponent from "../../../components/admin/ModalComponent/ModelComponent";
import Loading from "../../../components/global/LoadingComponent/LoadingComponent";
import DrawerComponent from "../../../components/admin/DrawerComponent/DrawerComponent";
import * as ProductAllService from "../../../services/ProductAllService";
import * as message from "../../../components/global/MessageComponent/Message";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "@mui/material";


const ProductList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowSelected, setRowSelected] = useState('')
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [isPendingUpdate, setIsPendingUpdate] = useState(false)
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
    const user = useSelector((state) => state?.user)
    const searchInput = useRef(null);
    const inittial = () => ({
        nameProduct: '',
        price: '',
        description: '',
        rating: '',
        imageProduct: '',
        categoryName: '',
        countInStock: '',
        newCategory: '',
        discount: '',
        featured: false,
        available: true,
    })
    const [stateProduct, setStateProduct] = useState(inittial())
    const [stateProductDetails, setStateProductDetails] = useState(inittial())

    const [form] = Form.useForm();

    const mutation = useMutationHooks(
        (data) => {
            const { nameProduct,
                price,
                description,
                rating,
                imageProduct,
                categoryName,
                countInStock, discount, featured, available } = data
            const res = ProductAllService.createNewProduct({
                nameProduct,
                price,
                description,
                rating,
                imageProduct,
                categoryName,
                countInStock,
                discount,
                featured,
                available
            })
            return res
        }
    )
    const mutationUpdate = useMutationHooks(
        (data) => {
            const { id,
                token,
                ...rests } = data
            const res = ProductAllService.updateInfoProduct(
                id,
                token,
                { ...rests })
            return res
        },
    )

    const mutationDeleted = useMutationHooks(
        (data) => {
            const { id,
                token,
            } = data
            const res = ProductAllService.deleteInfoProduct(
                id,
                token)
            return res
        },
    )

    const mutationDeletedMany = useMutationHooks(
        (data) => {
            const { token, ...ids
            } = data
            const res = ProductAllService.deleteManyProduct(
                ids,
                token)
            return res
        },
    )

    const getAllProducts = async () => {
        const res = await ProductAllService.getAllProduct()
        return res
    }

    const fetchGetDetailsProduct = async (rowSelected) => {
        const res = await ProductAllService.getDetailsInfoProduct(rowSelected)
        if (res?.data) {
            setStateProductDetails({
                nameProduct: res?.data?.nameProduct,
                price: res?.data?.price,
                description: res?.data?.description,
                rating: res?.data?.rating,
                imageProduct: res?.data?.imageProduct,
                categoryName: res?.data?.categoryName,
                countInStock: res?.data?.countInStock,
                discount: res?.data?.discount,
                featured: res?.data?.featured,
                available: res?.data?.available
            })
        }
        setIsPendingUpdate(false)
    }

    useEffect(() => {
        if (!isModalOpen) {
            form.setFieldsValue(stateProductDetails)
        } else {
            form.setFieldsValue(inittial())
        }
    }, [form, stateProductDetails, isModalOpen])

    useEffect(() => {
        if (rowSelected && isOpenDrawer) {
            setIsPendingUpdate(true)
            fetchGetDetailsProduct(rowSelected)
        }
    }, [rowSelected, isOpenDrawer])

    const handleDetailsProduct = () => {
        setIsOpenDrawer(true)
    }

    const handleDelteManyProducts = (ids) => {
        mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }

    const fetchAllCategoryProduct = async () => {
        const res = await ProductAllService.getAllCategory()
        return res
    }

    const { data, isPending, isSuccess, isError } = mutation
    const { data: dataUpdated, isPending: isPendingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
    const { data: dataDeleted, isPending: isPendingDeleted, isSuccess: isSuccessDelected, isError: isErrorDeleted } = mutationDeleted
    const { data: dataDeletedMany, isPending: isPendingDeletedMany, isSuccess: isSuccessDelectedMany, isError: isErrorDeletedMany } = mutationDeletedMany


    const queryProduct = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
    const categoryProduct = useQuery({ queryKey: ['category-product'], queryFn: fetchAllCategoryProduct })
    const { isPending: isPendingProducts, data: products } = queryProduct
    const renderAction = () => {
        return (
            <div>
                <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />
                <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsProduct} />
            </div>
        )
    }


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        // setSearchText(selectedKeys[0]);
        // setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        // setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
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
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        // render: (text) =>
        //   searchedColumn === dataIndex ? (
        //     // <Highlighter
        //     //   highlightStyle={{
        //     //     backgroundColor: '#ffc069',
        //     //     padding: 0,
        //     //   }}
        //     //   searchWords={[searchText]}
        //     //   autoEscape
        //     //   textToHighlight={text ? text.toString() : ''}
        //     // />
        //   ) : (
        //     text
        //   ),
    });


    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'nameProduct',
            sorter: (a, b) => a.nameProduct.length - b.nameProduct.length,
            ...getColumnSearchProps('nameProduct')
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'categoryName',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
        },
        {
            title: 'Đánh giá',
            dataIndex: 'rating',
            sorter: (a, b) => a.rating - b.rating,
            filters: [
                {
                    text: '>= 3',
                    value: '>=',
                },
                {
                    text: '<= 3',
                    value: '<=',
                }
            ],
            onFilter: (value, record) => {
                if (value === '>=') {
                    return Number(record.rating) >= 3
                }
                return Number(record.rating) <= 3
            },
        },
        {
            title: 'Số lượng',
            dataIndex: 'countInStock',
        },
        {
            title: 'Sản phẩm nổi bật',
            dataIndex: 'featured',
            filters: [
                {
                    text: 'Sản phẩm nổi bật',
                    value: 'true',
                },
                {
                    text: 'Không',
                    value: 'false',
                },
            ],
        },
        {
            title: 'Hiển thị',
            dataIndex: 'available',
            filters: [
                {
                    text: 'Có',
                    value: 'true',
                },
                {
                    text: 'Không',
                    value: 'false',
                },
            ],
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: renderAction
        },
    ];
    const dataTable = products?.data?.length && products?.data?.map((product) => {
        return { ...product, key: product._id, featured: product.featured ? 'Sản phẩm nổi bật' : 'Không',available:product.available}
    })

    useEffect(() => {
        if (isSuccess && data?.status === 'OK') {
            message.success()
            handleCancel()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess])

    useEffect(() => {
        if (isSuccessDelectedMany && dataDeletedMany?.status === 'OK') {
            message.success()
        } else if (isErrorDeletedMany) {
            message.error()
        }
    }, [isSuccessDelectedMany])

    useEffect(() => {
        if (isSuccessDelected && dataDeleted?.status === 'OK') {
            message.success()
            handleCancelDelete()
        } else if (isErrorDeleted) {
            message.error()
        }
    }, [isSuccessDelected])

    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateProductDetails({
            nameProduct: '',
            price: '',
            description: '',
            rating: '',
            imageProduct: '',
            categoryName: '',
            countInStock: '',
            featured: false
        })
        form.resetFields()
    };

    useEffect(() => {
        if (isSuccessUpdated && dataUpdated?.status === 'OK') {
            message.success()
            handleCloseDrawer()
        } else if (isErrorUpdated) {
            message.error()
        }
    }, [isSuccessUpdated])

    const handleCancelDelete = () => {
        setIsModalOpenDelete(false)
    }

    const handleDeleteProduct = () => {
        mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({
            nameProduct: '',
            price: '',
            description: '',
            rating: '',
            imageProduct: '',
            categoryName: '',
            countInStock: '',
            discount: '',
            featured: false
        })
        form.resetFields()
    };

    const onFinish = () => {
        const params = {
            nameProduct: stateProduct.nameProduct,
            price: stateProduct.price,
            description: stateProduct.description,
            rating: stateProduct.rating,
            imageProduct: stateProduct.imageProduct,
            categoryName: stateProduct.categoryName === 'add_category' ? stateProduct.newCategory : stateProduct.categoryName,
            countInStock: stateProduct.countInStock,
            discount: stateProduct.discount,
            featured: stateProduct.featured
        }
        mutation.mutate(params, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }

    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleOnchangeDetails = (e) => {
        setStateProductDetails({
            ...stateProductDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            imageProduct: file.preview
        })
    }

    const handleOnchangeAvatarDetails = async ({ fileList }) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProductDetails({
            ...stateProductDetails,
            imageProduct: file.preview
        })
    }
    const onUpdateProduct = () => {
        mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateProductDetails }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }

    const handleChangeSelect = (value) => {
        setStateProduct({
            ...stateProduct,
            categoryName: value
        })
    }

    const handleChangeFeatured = (e) => {
        setStateProductDetails({
            ...stateProductDetails,
            featured: e.target.value,
        });
    };

    const handleChangeAvailable = (e) => {
        setStateProductDetails({
            ...stateProductDetails,
            available: e.target.value,
        });
    };

    return (
        <div>
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Button
                    style={{ height: '40px', borderRadius: '6px', borderStyle: 'dashed', marginRight: '10px' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <PlusOutlined style={{ fontSize: '20px' }} /> Thêm sản phẩm mới
                </Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent handleDelteMany={handleDelteManyProducts} columns={columns} isPending={isPendingProducts} data={dataTable} onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            setRowSelected(record._id)
                        }
                    };
                }} />
            </div>
            <ModalComponent forceRender title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Loading isPending={isPending}>

                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        onFinish={onFinish}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Tên sản phẩm"
                            name="nameProduct"
                            rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                        >
                            <InputComponent value={stateProduct['nameProduct']} onChange={handleOnchange} name="nameProduct" />
                        </Form.Item>

                        <Form.Item
                            label="Loại sản phẩm"
                            name="categoryName"
                            rules={[{ required: true, message: 'Vui lòng nhập loại sản phẩm!' }]}
                        >
                            <Select
                                name="categoryName"
                                // defaultValue="lucy"
                                // style={{ width: 120 }}
                                value={stateProduct.categoryName}
                                onChange={handleChangeSelect}
                                options={renderOptions(categoryProduct?.data?.data)}
                            />
                        </Form.Item>
                        {stateProduct.categoryName === 'add_category' && (
                            <Form.Item
                                label='Loại mới'
                                name="newCategory"
                                rules={[{ required: true, message: 'Vui lòng nhập loại sản phẩm mới!' }]}
                            >
                                <InputComponent value={stateProduct.newCategory} onChange={handleOnchange} name="newCategory" />
                            </Form.Item>
                        )}
                        <Form.Item
                            label="Số lượng"
                            name="countInStock"
                            rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
                        >
                            <InputComponent value={stateProduct.countInStock} onChange={handleOnchange} name="countInStock" />
                        </Form.Item>
                        <Form.Item
                            label="Giá tiền"
                            name="price"
                            rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}
                        >
                            <InputComponent value={stateProduct.price} onChange={handleOnchange} name="price" />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                        >
                            <InputComponent value={stateProduct.description} onChange={handleOnchange} name="description" />
                        </Form.Item>
                        <Form.Item
                            label="Đánh giá"
                            name="rating"
                            rules={[{ required: true, message: 'Vui lòng nhập đánh giá!' }]}
                        >
                            <InputComponent value={stateProduct.rating} onChange={handleOnchange} name="rating" />
                        </Form.Item>
                        <Form.Item
                            label="Giảm giá"
                            name="discount"
                            rules={[{ required: true, message: 'Vui lòng nhập giá giảm!' }]}
                        >
                            <InputComponent value={stateProduct.discount} onChange={handleOnchange} name="discount" />
                        </Form.Item>
                        <Form.Item
                            label="Ảnh sản phẩm"
                            name="imageProduct"
                            rules={[{ required: false, message: 'Vui lòng nhập ảnh sản phẩm!' }]}
                        >
                            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                                <Button >Select File</Button>
                                {stateProduct?.imageProduct && (
                                    <img src={stateProduct?.imageProduct} style={{
                                        height: '60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft: '10px'
                                    }} alt="avatar" />
                                )}
                            </WrapperUploadFile>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 18, span: 14 }}>
                            <Button type="primary" htmlType="submit">
                                Thêm sản phẩm
                            </Button>
                        </Form.Item>
                    </Form>
                </Loading>
            </ModalComponent>
            <DrawerComponent title='Chi tiết sản phẩm' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="65%">
                <Loading isPending={isPendingUpdate || isPendingUpdated}>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onUpdateProduct}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Tên sản phẩm"
                            name="nameProduct"
                            rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                        >
                            <InputComponent value={stateProductDetails['nameProduct']} onChange={handleOnchangeDetails} name="nameProduct" />
                        </Form.Item>

                        <Form.Item
                            label="Loại sản phẩm"
                            name="categoryName"
                            rules={[{ required: true, message: 'Vui lòng nhập loại sản phẩm!' }]}
                        >
                            <InputComponent value={stateProductDetails['categoryName']} onChange={handleOnchangeDetails} name="categoryName" />
                        </Form.Item>
                        <Form.Item
                            label="Số lượng "
                            name="countInStock"
                            rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
                        >
                            <InputComponent value={stateProductDetails.countInStock} onChange={handleOnchangeDetails} name="countInStock" />
                        </Form.Item>
                        <Form.Item
                            label="Giá tiền"
                            name="price"
                            rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
                        >
                            <InputComponent value={stateProductDetails.price} onChange={handleOnchangeDetails} name="price" />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                        >
                            <InputComponent value={stateProductDetails.description} onChange={handleOnchangeDetails} name="description" />
                        </Form.Item>
                        <Form.Item
                            label="Đánh giá"
                            name="rating"
                            rules={[{ required: true, message: 'Vui lòng nhập đánh giá!' }]}
                        >
                            <InputComponent value={stateProductDetails.rating} onChange={handleOnchangeDetails} name="rating" />
                        </Form.Item>
                        <Form.Item
                            label="Giảm giá"
                            name="discount"
                            rules={[{ required: true, message: 'Vui lòng nhập giá giảm!' }]}
                        >
                            <InputComponent value={stateProductDetails.discount} onChange={handleOnchangeDetails} name="discount" />
                        </Form.Item>
                        <Form.Item
                            label="Ảnh sản phẩm"
                            name="imageProduct"
                            rules={[{ required: false, message: 'Vui lòng nhập ảnh sản phẩm!' }]}
                        >
                            <WrapperUploadFile onChange={handleOnchangeAvatarDetails} maxCount={1}>
                                <Button >Select File</Button>
                                {stateProductDetails?.imageProduct && (
                                    <img src={stateProductDetails?.imageProduct} style={{
                                        height: '60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft: '10px'
                                    }} alt="avatar" />
                                )}
                            </WrapperUploadFile>
                        </Form.Item>
                        <Form.Item
                            label="Sản phẩm nổi bật"
                            name="featured"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn sản phẩm nổi bật!",
                                },
                            ]}
                        >
                            <Radio.Group onChange={handleChangeFeatured} value={stateProductDetails.featured}>
                                <Radio value={true}>Sản phẩm nổi bật</Radio>
                                <Radio value={false}>Không</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Hiển thị"
                            name="available"
                            rules={[
                                {
                                    required: true,
                                    message: "Sản phẩm này có hiển thị ở trang khách hàng không?",
                                },
                            ]}
                        >
                            <Radio.Group onChange={handleChangeAvailable} value={stateProductDetails.available}>
                                <Radio value={true}>Hiển thị</Radio>
                                <Radio value={false}>Không hiển thị</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </Loading>
            </DrawerComponent>
            <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
                <Loading isPending={isPendingDeleted}>
                    <div>Bạn có chắc xóa sản phẩm này không?</div>
                </Loading>
            </ModalComponent>
        </div>
    )
}

export default ProductList