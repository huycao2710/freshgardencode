import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AdminHome from "../pages/admin/AdminHome";
import AdminOrder from "../pages/admin/AdminOrder";
import AdminProduct from "../pages/admin/AdminProduct";
import AdminUser from "../pages/admin/AdminUser";
import DetailsOrderPage from "../pages/public/DetailsOrderPage/DetailsOrderPage";
import FranchisePage from "../pages/public/FranchisePage/FranchisePage";
import HomePage from "../pages/public/HomePage/HomePage";
import MapPage from "../pages/public/MapPage/MapPage";
import MyOrderPage from "../pages/public/MyOrderPage/MyOrderPage";
import FranchisePage from "../pages/public/FranchisePage/FranchisePage";
import OrderPage from "../pages/public/OrderPage/OrderPage";
import OrderSuccess from "../pages/public/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/public/PaymentPage/PaymentPage";
import ProductDetail from "../pages/public/ProductDetailPage/ProductDetail";
import ProductsPage from "../pages/public/ProductsPage/ProductsPage";
import Profile from "../pages/public/Profile/Profile";
import NotFoundPage from "../pages/public/NotFoundPage/NotFoundPage";
import NewsPage from "../pages/public/NewsPage/NewsPage";
import News1 from "../pages/public/NewsPage/News1";
import News2 from "../pages/public/NewsPage/News2";
import News3 from "../pages/public/NewsPage/News3";
import News4 from "../pages/public/NewsPage/News4";
import News5 from "../pages/public/NewsPage/News5";
import News6 from "../pages/public/NewsPage/News6";

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
        page: ProductDetail,
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
        path: '/nhuongquyen',
        page: FranchisePage,
        isShowHeader: false
    },
    {
        path: '/nhuongquyen',
        page: FranchisePage,
    },
    {
        path: '/admin',
        page: AdminHome,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '/admin/users',
        page: AdminUser,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '/admin/products',
        page: AdminProduct,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '/admin/orders',
        page: AdminOrder,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '/tintuc',
        page: NewsPage,
        isShowHeader: true
    },
    {
        path: '/tintuc/tintuc1',
        page: News1,
        isShowHeader: true
    },
    {
        path: '/tintuc/tintuc2',
        page: News2,
        isShowHeader: true
    },
    {
        path: '/tintuc/tintuc3',
        page: News3,
        isShowHeader: true
    },
    {
        path: '/tintuc/tintuc4',
        page: News4,
        isShowHeader: true
    },
    {
        path: '/tintuc/tintuc5',
        page: News5,
        isShowHeader: true
    },
    {
        path: '/tintuc/tintuc6',
        page: News6,
        isShowHeader: true
    },

]