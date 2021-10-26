import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './components/mainpage'
import ProductScreen from './screens/ProductScreen'
import ProductList from './screens/ProductList'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './action/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAdressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {

  const cart = useSelector(state=> state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state)=> state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  const signoutHandler = ()=>{
    dispatch(signout);
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Ecommerce
            </Link>
          </div>
          <div className="nav">
            <Link to="/cart">
              <i class="fas fa-shopping-cart"></i>
               {cartItems.length > 0 &&(
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Signout
                    </Link>
                  </li>  
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}  
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} ></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAdressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/productlist" component={ProductList}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/" component= {HomeScreen} exact></Route>
        </main>
        <footer className="row center">© 2021, PT. Ecommerce.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
