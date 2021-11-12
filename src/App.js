import './App.css';
import './Reset.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Pages/Frontend/About/About";
import Contact from "./Pages/Frontend/Contact/Contact";
import Home from "./Pages/Frontend/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Frontend/Register/Register';
import Login from './Pages/Frontend/Login/Login';
import AuthProvider from './context/AuthProvider';
import Products from './Pages/Frontend/Products/Products';
import Reviews from './Pages/Frontend/Reviews/Reviews';
import Brands from './Pages/Frontend/Brands/Brands';
import PrivateRoute from './Pages/Frontend/PrivateRoute/PrivateRoute';
import Shipping from './Pages/Frontend/Shipping/Shipping';
import Dashboard from './Pages/Frontend/User/Dashboard/Dashboard';
import PayNow from './Pages/Frontend/User/PayNow/PayNow';
import Orders from './Pages/Frontend/User/Orders/Orders';
import UserReview from './Pages/Frontend/User/UserReview/UserReview';
import ManageOrders from './Pages/Backend/ManageOrders/ManageOrders';
import CreateProduct from './Pages/Backend/CreateProduct/CreateProduct';
import MakeAnAdmin from './Pages/Backend/MakeAnAdmin/MakeAnAdmin';
import AdminDashboard from './Pages/Backend/AdminDashboard/AdminDashboard';
import ManageProducts from './Pages/Backend/ManageProducts/ManageProducts';
import AdminPrivateRoute from './Pages/Backend/AdminPrivateRoute/AdminPrivateRoute';
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Header Start */}
        <Header></Header>
        {/* Main Body */}
        <main>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about-us">
              <About></About>
            </Route>

            <Route path="/products">
              <Products></Products>
            </Route>

            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>

            <Route path="/brands">
              <Brands></Brands>
            </Route>

            <Route path="/contact-us">
              <Contact></Contact>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/shipping/:id">
              <Shipping></Shipping>
            </PrivateRoute>

            {/* User Menu */}
            <PrivateRoute path="/user/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/user/pay-now">
              <PayNow></PayNow>
            </PrivateRoute>

            <PrivateRoute path="/user/orders">
              <Orders></Orders>
            </PrivateRoute>

            <PrivateRoute path="/user/reviews">
              <UserReview></UserReview>
            </PrivateRoute>

            {/* Admin Menu */}
            <AdminPrivateRoute path="/admin/dashboard">
              <AdminDashboard></AdminDashboard>
            </AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/orders">
              <ManageOrders></ManageOrders>
            </AdminPrivateRoute>

            <AdminPrivateRoute path="/admin/products/create">
              <CreateProduct></CreateProduct>
            </AdminPrivateRoute>

            <AdminPrivateRoute path="/admin/products/all">
              <ManageProducts></ManageProducts>
            </AdminPrivateRoute>

            <AdminPrivateRoute path="/admin/user/role">
              <MakeAnAdmin></MakeAnAdmin>
            </AdminPrivateRoute>
          </Switch>
        </main>
        {/* Main Body */}

        {/* Footer Start */}
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
