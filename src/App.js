import React from 'react'
import axios from 'axios'

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AdminPage from './component/Admin/AdminPage.js';

import Footer from './component/layout/Footer/Footer.js'
import Home from './component/layout/Home/Home.js'
import Loader from './component/layout/Loader/Loader.js'
import Navbar from './component/layout/Navbar/Navbar.js'
import ProfilePage from './component/layout/ProfilePage/ProfilePage.js';

import UserLogin from './component/Login/userLogin.js'
import Register from './component/Register/Register.js';
import UserPage from './component/user/UserPage.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getuserData } from './component/action/useraction.js';
import Alert from './component/alert/Alert.js';
import Cart from './component/layout/Cart/Cart.js';
import Payment from './component/layout/Payment/Payment.js';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useState } from 'react';
import OrderSuccess from './component/layout/Payment/orderSuccess.js';
import Order from './component/layout/Orders/Order.js';







const App = () => {
  const [stripeApikey, setstripeApikey] = useState("")


  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch=useDispatch()




//   const getstripeApikey=async()=>{
        
//     const {data}=await axios.get("/api/v1/stripeapikey")
//     setstripeApikey(data.stripeApiKey)
//     console.log(stripeApikey)

// }

useEffect(() => {
  dispatch(getuserData())
  
  
  const getstripeApikey=async()=>{
        
    const {data}=await axios.get("/api/v1/stripeapikey")
    setstripeApikey(data.stripeApiKey)
    console.log(stripeApikey)

}

  getstripeApikey()

  
}, [dispatch,stripeApikey])


  // const stripePromise = loadStripe('pk_test_51LXQsKSGo4vEVcqdbAVATP5zzMF1ZacoUbS6lXRSTUgWGzh0QCTyEYIrN6lQj2Uo29LfZ12BXKd0JxeYVG2OxZ0D00JNaM6SQR');

  // const options = {
  //     // passing the client secret obtained from the server
  //     clientSecret: '{{sk_test_51LXQsKSGo4vEVcqdISEzeBOl026ReO7bOGWlaROdMze0cUNCWpaPBA62JGRDiPPxKL1QIZTVCvwuENn6q0uSmwYF00HrJfK9eR}}',
  //   };
  
  // const { error, loading, isAuthenticated } = useSelector(
  //   (state) => state.user
  // );


  // const { isAuthenticated } = useSelector((state) => state.user);

  // const {user:userdata}=useSelector((state)=>state.user)

  

  // const dispatch=useDispatch()

  
  // const id=user.data._id
  // console.log(id)

  
  // useEffect(()=>{
  //   dispatch(getuserData())

  // },[dispatch])

  
  

  return (
    
    
      <div>

  
    <BrowserRouter>
    <Navbar/> 
    {/* <Payment/> */}
    {/* <Loader/> */}

    {/* <Alert success='success' error='please provide data properly'  /> */}
    
    <Routes>
      <Route  path="/" element={<Home />}/>
        <Route  path="/UserLogin" element={<UserLogin />} />
        <Route  path="/Register" element={<Register/>}/>
        <Route  path="/admin" element={<AdminPage/>}/>
        <Route  path="/user" element={<UserPage/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/success" element={<OrderSuccess/>}/>
        <Route  path="/order" element={<Order/>}/>



        

        <Route  path="/payment" element={<Elements stripe={loadStripe(stripeApikey)} ><Payment/></Elements>}/>
        {/* </Elements> */}


        




    </Routes>
  </BrowserRouter>
  
  {/* <AdminPage/> */}
  
  {/* <ProfilePage/> */}
        
        <Footer/>
      </div>

    
  )
}

export default App