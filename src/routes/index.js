import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AdminHome from "../pages/admin/AdminHome";
import AdminOrder from "../pages/admin/AdminOrder";
import AdminProduct from "../pages/admin/AdminProduct";
import AdminUser from "../pages/admin/AdminUser";
import DetailsOrderPage from "../pages/public/DetailsOrderPage/DetailsOrderPage";
import HomePage from "../pages/public/HomePage/HomePage";
import MyOrderPage from "../pages/public/MyOrderPage/MyOrderPage";
import OrderPage from "../pages/public/OrderPage/OrderPage";
import OrderSuccess from "../pages/public/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/public/PaymentPage/PaymentPage";
import ProductDetailPage from "../pages/public/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../pages/public/ProductsPage/ProductsPage";
import Profile from "../pages/public/Profile/Profile";
import TypeProductPage from "../pages/public/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
    },
    {
        path: '/order',
        page: OrderPage,
    },
    {
        path: '/my-order',
        page: MyOrderPage,
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
    },
    {
        path: '/payment',
        page: PaymentPage,
    },
    {
        path: '/orderSuccess',
        page: OrderSuccess,
    },
    {
        path: '/product',
        page: ProductsPage,
    },
    {
        path: '/:type',
        page: TypeProductPage,
    },
    {
        path: '/sign-in',
        page: SignInPage,
    },
    {
        path: '/sign-up',
        page: SignUpPage,
    },
    {
        path: '/product-details/:id',
        page: ProductDetailPage,
    },
    {
        path: '/profile-user',
        page: Profile,
    },
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