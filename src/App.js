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
