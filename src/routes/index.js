import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AdminHome from "../pages/admin/AdminHome";
import AdminOrder from "../pages/admin/AdminOrder";
import AdminProduct from "../pages/admin/AdminProduct";
import AdminUser from "../pages/admin/AdminUser";
import DetailsOrderPage from "../pages/public/DetailsOrderPage/DetailsOrderPage";
import HomePage from "../pages/public/HomePage/HomePage";
import MapPage from "../pages/public/MapPage/MapPage";
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
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
        isShowHeader: true
    },
    {
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true
    },
    {
        path: '/orderSuccess',
        page: OrderSuccess,
        isShowHeader: true
    },
    {
        path: '/product',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/product-details/:id',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '/profile-user',
        page: Profile,
        isShowHeader: true
    },
    {
        path: '/map',
        page: MapPage,
        isShowHeader: true
    },
    {
        path: '/admin',
        page: AdminHome,
        isShowHeader: false
    },
    {
        path: '/admin/users',
        page: AdminUser,
        isShowHeader: false
    },
    {
        path: '/admin/products',
        page: AdminProduct,
        isShowHeader: false
    },
    {
        path: '/admin/orders',
        page: AdminOrder,
        isShowHeader: false
    },

]