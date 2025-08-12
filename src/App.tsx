import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';

import ForgotPassword from './Auth/ForgotPassword';
import Login from './Auth/Login';
import Register from './Auth/register';

import Footer from './components/footer';
import ResponsiveHeader from './components/responsiveHeader';

import PageNotFound from './pages/404';
import AboutIndex from './pages/About';
import Address_Step_2 from './pages/CheckOut/Address_Step_2';
import Complete_Step_5 from './pages/CheckOut/Complete_Step_5';
import Login_Step_1 from './pages/CheckOut/Login_Step_1';
import Payment_Step_4 from './pages/CheckOut/Payment_Step_4';
import Review_Step_3 from './pages/CheckOut/Review_Step_3';

import ContactUs_Index from './pages/ContactUs/ContactUs_Index';
import DashboardIndex from './pages/dashboard/dashboardIndex';
import Home_Index from './pages/home';
import My_Profile from './pages/My Profile/My_Profile';
import My_Wishlist_Index from './pages/My Wishlist/My_Wishlist_Index';
import MyCartIndex from './pages/My_Cart/myCartIndex';
import Order_Products_Index from './pages/Order Products/Order_Products';
import DashReview_Index from './pages/dash-review/DashReview_Index';

import Admin from './pages/other/Admin';
import Cookies_Policy from './pages/other/Cookies_Policy';
import Delivery from './pages/other/Delivery';
import Payments from './pages/other/Payments';
import Privacy_Policy from './pages/other/Privacy_Policy';
import Returns_And_Refunds from './pages/other/Returns_And_Refunds';
import Reviews from './pages/other/Reviews';
import Terms_And_Conditions from './pages/other/Terms_And_Conditions';

import Payment_History_Index from './pages/Payment History/Payment_History_Index';
import Settings_Index from './pages/Settings/Settings_Index';
import ShopDetail_Index from './pages/Shop Detail/ShopDetail_Index';
import ShopIndex from './pages/Shop/ShopIndex';
import FAQ from './pages/faq/FAQ';
import Sitemap from './pages/other/sitemap';
import LikeShare from './pages/home/likeShare';
///
import './assets/css/normalize.css'
import './assets/css/main.css'
import './assets/css/autiriven.main.css'
import './assets/css/autiriven.tablet.css'
import './assets/css/autiriven.mobile.css' // ✅ last me

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const appRoutes = [
    { path: '/', element: <Home_Index /> },
    { path: '/about', element: <AboutIndex /> },
    { path: '/shop', element: <ShopIndex /> },
    { path: '/shop-detail', element: <ShopDetail_Index /> },
    { path: '/cart', element: <MyCartIndex /> },
    { path: '/dashboard', element: <DashboardIndex /> },
    { path: '/profile', element: <My_Profile /> },
    { path: '/orders', element: <Order_Products_Index /> },
    { path: '/payment-history', element: <Payment_History_Index /> },
    { path: '/settings', element: <Settings_Index /> },
    { path: '/wishlist', element: <My_Wishlist_Index /> },
    { path: '/contact', element: <ContactUs_Index /> },
    { path: '/dash-review', element: <DashReview_Index /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/checkout/login', element: <Login_Step_1 /> },
    { path: '/checkout/address', element: <Address_Step_2 /> },
    { path: '/checkout/review', element: <Review_Step_3 /> },
    { path: '/checkout/payment', element: <Payment_Step_4 /> },
    { path: '/checkout/complete', element: <Complete_Step_5 /> },
    { path: '/privacy-policy', element: <Privacy_Policy /> },
    { path: '/cookies-policy', element: <Cookies_Policy /> },
    { path: '/delivery', element: <Delivery /> },
    { path: '/payments', element: <Payments /> },
    { path: '/returns', element: <Returns_And_Refunds /> },
    { path: '/terms', element: <Terms_And_Conditions /> },
    { path: '/reviews', element: <Reviews /> },
    { path: '/admin', element: <Admin /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/sitemap', element: <Sitemap /> },
    { path: '*', element: <PageNotFound /> },
  ];

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <ResponsiveHeader />
       <LikeShare/>
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
