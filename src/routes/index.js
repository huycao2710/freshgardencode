import AdminHome from "../pages/admin/AdminHome";
import AdminOrder from "../pages/admin/AdminOrder";
import AdminProduct from "../pages/admin/AdminProduct";
import AdminUser from "../pages/admin/AdminUser";

export const routes = [
    {
        path: '/admin',
        page: AdminHome,
    },
    {
        path: '/admin/users',
        page: AdminUser,
    },
    {
        path: '/admin/products',
        page: AdminProduct,
    },
    {
        path: '/admin/orders',
        page: AdminOrder,
    },
]